export default function filter(allowedMethods) {
  return (req, res, next) => {
    if (allowedMethods.includes(req.method)) {
      next();
    } else {
      res.sendStatus(405);
    }
  };
}
