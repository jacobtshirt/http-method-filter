export default function filter(whitelist, statusCode) {
  return (req, res, next) => {
    if (whitelist.includes(req.method)) next();
    else res.sendStatus(statusCode || 405);
  };
}
