module.exports = function unauthorized() {
  const req = this.req;
  const res = this.res;
  sails.log.verbose('Ran custom response: res.unauthorized()');
  if (req.wantsJSON) {
    return res.sendStatus(401);
  }
};

