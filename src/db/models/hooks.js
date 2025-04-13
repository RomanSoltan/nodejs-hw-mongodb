export const handleSaveError = (error, doc, next) => {
  error.staus = 400;
  next();
};

export const setUpdateSettings = function (next) {
  this.option.new = true;
  this.option.runValidators = true;
  next();
};
