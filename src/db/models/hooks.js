export const handleSaveError = (error, doc, next) => {
  error.staus = 400;
  next();
};

export const setUpdateSettings = function (next) {
  // для спрацювання валідації при patch
  this.options.new = true;
  this.options.runValidators = true;
  next();
};
