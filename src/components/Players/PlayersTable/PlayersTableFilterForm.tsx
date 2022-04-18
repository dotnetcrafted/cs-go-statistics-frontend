import {
  Button,
  Col,
  DatePicker,
  Form,
  Radio,
  RadioChangeEvent,
  Row,
} from "antd";
import { FC, useCallback, useState } from "react";
import en_GB from "antd/es/date-picker/locale/en_GB";
import moment, { Moment } from "moment";

export type DateValues = {
  [index: string]: string;
  dateFrom: string;
  dateTo: string;
  periodDay: string;
};

const SERVER_DATE_FORMAT = "MM/DD/YYYY";
const USER_DATE_FORMAT = "ll";

const pariodsDay = [
  { label: "All day", value: "All" },
  { label: "Afternoon", value: "Afternoon" },
  { label: "Evening", value: "Evening" },
];

interface IPlayersTableFilterForm {
  onFormSubmit: (message: DateValues) => void;
}

const PlayersTableFilterForm: FC<IPlayersTableFilterForm> = ({
  onFormSubmit,
}) => {
  const [periodDay, setPeriodDay] = useState<string>("ALL");
  const [dateToIsOpen, setDateToIsOpen] = useState<boolean>(false);
  const [dateFrom, setDateFrom] = useState<Moment>(moment());
  const [dateTo, setDateTo] = useState<Moment>(moment());

  const handleSubmit = useCallback((e: Event) => {
    e.preventDefault();
  }, []);

  const onPeriodDayChange = useCallback((e: RadioChangeEvent) => {
    setPeriodDay(e.target.value as string);
  }, []);

  const disabledDateFrom = useCallback(
    (dateFromMoment: Moment | undefined): boolean => {
      if (moment(dateFromMoment).isAfter(moment())) {
        return true;
      }
      if (moment(dateFromMoment).isSameOrAfter(dateTo, "day")) {
        return false;
      }
      return true;
    },
    [dateTo]
  );

  const disabledDateTo = useCallback(
    (dateToMoment: Moment | undefined): boolean => {
      if (moment(dateToMoment).isAfter(moment())) {
        return true;
      }
      if (moment(dateToMoment).isSameOrAfter(dateFrom, "day")) {
        return false;
      }
      return true;
    },
    [dateFrom]
  );

  const onFromChange = useCallback((value: Moment | null): void => {
    if (value) {
      setDateFrom(value);
    }
  }, []);

  const onToChange = useCallback((value: Moment | null): void => {
    if (value) {
      setDateTo(value);
    }
  }, []);

  const handleFromOpenChange = useCallback((open: boolean): void => {
    if (!open) {
      setDateToIsOpen(true);
    }
  }, []);

  const handleToOpenChange = useCallback((open: boolean): void => {
    if (!open) {
      setDateToIsOpen(open);
    }
  }, []);

  const onDayButtonClick = useCallback(() => {
    const values: DateValues = {
      dateFrom: moment().format(SERVER_DATE_FORMAT),
      dateTo: moment().format(SERVER_DATE_FORMAT),
      periodDay,
    };
    onFormSubmit(values);
  }, [onFormSubmit, periodDay]);

  const onWeekButtonClick = useCallback(() => {
    const values: DateValues = {
      dateFrom: moment().startOf("isoWeek").format(SERVER_DATE_FORMAT),
      dateTo: moment().format(SERVER_DATE_FORMAT),
      periodDay,
    };

    onFormSubmit(values);
  }, [onFormSubmit, periodDay]);

  const onMonthButtonClick = useCallback(() => {
    const values: DateValues = {
      dateFrom: moment().startOf("month").format(SERVER_DATE_FORMAT),
      dateTo: moment().format(SERVER_DATE_FORMAT),
      periodDay,
    };

    onFormSubmit(values);
  }, [onFormSubmit, periodDay]);

  const onAllButtonClick = useCallback(() => {
    const values: DateValues = {
      dateFrom: "",
      dateTo: moment().format(SERVER_DATE_FORMAT),
      periodDay,
    };

    onFormSubmit(values);
  }, [onFormSubmit, periodDay]);

  return (
    <Form>
      <Form.Item>
        <Radio.Group
          options={pariodsDay}
          value={periodDay}
          onChange={onPeriodDayChange}
        />
      </Form.Item>

      <Form.Item>
        <DatePicker
          format={USER_DATE_FORMAT}
          disabledDate={disabledDateFrom}
          onChange={onFromChange}
          onOpenChange={handleFromOpenChange}
          placeholder="From"
          locale={en_GB}
        />
      </Form.Item>
      <Form.Item>
        <DatePicker
          format={USER_DATE_FORMAT}
          disabledDate={disabledDateTo}
          onChange={onToChange}
          open={dateToIsOpen}
          onOpenChange={handleToOpenChange}
          placeholder="To"
          locale={en_GB}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Filter
        </Button>
      </Form.Item>

      <Form.Item>
        <Button onClick={onDayButtonClick}>Today</Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={onWeekButtonClick}>This Week</Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={onMonthButtonClick}>This Month</Button>
      </Form.Item>
      <Form.Item>
        <Button onClick={onAllButtonClick}>All Time</Button>
      </Form.Item>
    </Form>
  );
};

export default PlayersTableFilterForm;
