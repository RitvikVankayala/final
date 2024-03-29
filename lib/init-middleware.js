import { NextApiRequest, NextApiResponse } from "next";

export default function initMiddleware(middleware) {
  return function handler(req, res) {
    return new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }

        return resolve(result);
      });
    });
  };
}
