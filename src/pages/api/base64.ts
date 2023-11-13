// import { NextApiRequest, NextApiResponse } from "next";
// import { getPlaiceholder } from "plaiceholder";

// type Base64 = string;

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Base64>
// ) {
//   try {
//     const src = req.body;
//     const buffer = await fetch(src).then(async (res) =>
//       Buffer.from(await res.arrayBuffer())
//     );
//     const { base64 } = await getPlaiceholder(buffer);
//     res.status(200).send(base64);
//   } catch (error) {
//     console.log(error);
//   }
// }
