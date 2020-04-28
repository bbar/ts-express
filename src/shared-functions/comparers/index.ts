import moment from 'moment';

function ISO8601ASC(a: moment.MomentInput, b: moment.MomentInput) {
  return moment(a).valueOf() - moment(b).valueOf();
}

function ISO8601DESC(a: moment.MomentInput, b: moment.MomentInput) {
  return moment(b).valueOf() - moment(a).valueOf();
}

function numberASC(a: string | number, b: string | number) {
  return Number(a) - Number(b);
}

function numberDESC(a: string | number, b: string | number) {
  return Number(b) - Number(a);
}

export {
  ISO8601ASC,
  ISO8601DESC,
  numberASC,
  numberDESC,
};
