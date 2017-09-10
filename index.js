export default function filter(whitelist) {
  return (req, res, next) => {
    if (whitelist.includes(req.method)) next();
    else res.sendStatus(405);
  };
}
