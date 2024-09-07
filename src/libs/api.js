// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const registration = async (data) =>
  fetch("api/registration", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

export const adminMailer = async (data) =>
  fetch("api/admin", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
