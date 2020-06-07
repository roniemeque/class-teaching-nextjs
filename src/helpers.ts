export const apiUrl = (context: any) =>
  `${process.env.NODE_ENV === "development" ? "http" : "https"}://${
    context.req.headers.host
  }`;
