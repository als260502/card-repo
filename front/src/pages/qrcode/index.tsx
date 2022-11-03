import { QRCode as QRImage } from "../../components/QRcode";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { toPng } from "html-to-image";
import download from "downloadjs";
import { Button } from "../../components/Button";

const QRCode: NextPage = () => {
  const router = useRouter();

  const { id, name } = router.query;

  const handleDownloadQRCode = () => {
    const qrcode = document.getElementById("qr-code") as HTMLElement;
    toPng(qrcode).then(function (dataUrl) {
      download(dataUrl, `${id}-qrcode.png`);
    });
  };

  return (
    <div className="bg-gray-200">
      <Button onClick={handleDownloadQRCode} buttonText="Download QRCode" />

      <div
        id="qr-code"
        className="w-full h-screen px-2 bg-gray-200 flex flex-col"
      >
        <div className="mt-4 lg:mt-16 flex w-full flex-col items-center">
          <h1 className="md:text-3xl text-xl font-semibold">{name}</h1>

          <div className="flex flex-col items-center mt-20 md:mt-4 lg:mt-20">
            <h1 className="text-2xl font-bold">Scan Me</h1>
            <div className="mt-8">
              <QRImage id={String(id)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
