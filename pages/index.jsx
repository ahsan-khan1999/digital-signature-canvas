import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SignaturePad from "signature_pad";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    var canvas = document.querySelector("canvas");
    var signaturePad = new SignaturePad(canvas, {
      backgroundColor: "rgb(255, 255, 255)",
    });
    var sigText = document.getElementById("sig-dataUrl");
    var submitBtn = document.getElementById("sig-submitBtn");
    submitBtn.addEventListener(
      "click",
      function (e) {
        var dataUrl = signaturePad?.toSVG({ includeBackgroundColor: false });
        var sigText = document.getElementById("sig-dataUrl");
        if (sigText) {
          sigText.innerHTML = ""; // Clear existing content
          sigText.innerHTML = `<div dangerouslySetInnerHTML={{ __html: "${dataUrl}" }} />`;
          console.log(sigText,"test");
        }
      },
      false
    );
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <canvas></canvas>
        <button id="sig-submitBtn">Submit</button>
        <div class="row">
          <div class="col-md-12">
            <textarea id="sig-dataUrl" class="form-control" rows="5">
              Data URL for your signature will go here!
            </textarea>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-12" style={{ background: "#fff" }}>
           
            <div id="sig-dataUrl" />
          </div>
        </div>
      </main>
    </>
  );
}
