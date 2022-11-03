/* eslint-disable jsx-a11y/alt-text */
import { useQRCode } from "next-qrcode";

type Props = {
  id: string;
};

export const QRCode = ({ id }: Props) => {
  const { Image } = useQRCode();

  return (
    <Image
      text={`http://localhost:3000/card/${id}`}
      options={{
        type: "image/jpeg",
        quality: 0.3,
        level: "M",
        margin: 3,
        scale: 4,
        width: 200,
      }}
    />
  );
};
