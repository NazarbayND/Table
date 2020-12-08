import _ from "lodash";

export const sort = (data, sortingDetails) => {
  return _.orderBy(data, [sortingDetails.path], [sortingDetails.order]);
};
