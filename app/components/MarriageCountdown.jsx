"use client";
import { useEffect, useState } from "react";

export default function MarriageCountdown() {
  const TARGET_DATE = new Date("2026-11-26").getTime();
 const [timeLeft, setTimeLeft] = useState({
  days: 14,
  hours: 12,
  minutes: 28,
  seconds: 0, 
});

useEffect(() => {
  const updateCountdown = () => {
    const now = new Date().getTime();
    const diff = TARGET_DATE - now;

    if (diff <= 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
      (diff % (1000 * 60)) / 1000
    );

    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  updateCountdown();

  // Update every second
  const interval = setInterval(updateCountdown, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <>
      {/* <div className="bg-[url('/assets/countdown_bg.jpg')] bg-cover bg-no-repeat pb-12"> */}
      <div className="md:bg-[url('/assets/countdown_desktop_bg.png')] bg-[url('/assets/countdown_mobile_bg.jpg')] bg-cover bg-no-repeat pb-12 md:pt-0 pt-10 ">
        <div className="min-h-220 lg:min-h-375 h-80">
          <h2 className="lg:text-[60px] text-4xl text-center text-[#FFF5B9] lg:pt-42 pt-12 font-parisienne ">
            The Journey Begins
          </h2>

          <p className="lg:text-[22px] text-[20px] text-[#FFF5B9] mt-6 text-center lg:px-100 md:px-25 px-10 font-Cormorant-upright">
           Our families are excited that you are able to join us in celebrating <br/> what we hope will be one of the happiest days of our lives.
          </p>

          <h2 className="lg:text-[60px] text-2xl text-center text-[#FFF5B9] font-Cormorant-upright">
            {" "}
            {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M {timeLeft.seconds}S
          </h2>
          <div className="flex flex-col-1 gap-4 justify-center items-center mt-4">
            <a href="https://www.instagram.com/theinvitearc/" target="_blank">
              <img src="/assets/instagram_w.png" alt="" className="h-9 md:h-14 w-9 md:w-14" />
            </a>
          </div>
          <p className="lg:text-[24px] text-xl text-[#FFF5B9] mt-6 text-center font-Cormorant-upright">
            ©{" "}
            <a href="https://invitearc.com/" target="_blank">
              InviteArc
            </a>{" "}
            2026{" "}
          </p>

          <div className="flex flex-col justify-center items-center lg:ml-0 ml-24">
            <h2 className="lg:text-7xl text-2xl text-center text-[#FFF5B9] lg:pt-20 font-Cormorant-upright pt-20">
              Awaiting the Pleasure <br />
              of Your Company
            </h2>
         

               <div className="flex flex-col-1 gap-4 justify-center items-center mt-2 md:ml-10 ml-8">
              <a href="https://wa.me/9422159028" target="_blank">
                <img
                  src="/assets/whatsapp.png"
                  alt=""
                  className="lg:h-10 lg:w-10 h-6 w-6"
                />
              </a>
              <h2 className="lg:text-3xl text-xl text-center text-[#FFF5B9]  font-Cormorant-upright">
                Jagdish Patel
              </h2>
            </div>

<div className="flex flex-col-1 gap-4 justify-center items-center mt-2 ml-1 md:ml-0">
              <a href="https://wa.me/9370153277" target="_blank">
                <img
                  src="/assets/whatsapp.png"
                  alt=""
                  className="lg:h-10 lg:w-10 h-6 w-6"
                />
              </a>
              <h2 className="lg:text-3xl text-xl text-center text-[#FFF5B9]  font-Cormorant-upright">
                Jitu Patel
              </h2>
            </div>

   <div className="flex flex-col-1 gap-4 justify-center items-center mt-2 md:ml-10 ml-8">
              <a href="https://wa.me/9420188822" target="_blank">
                <img
                  src="/assets/whatsapp.png"
                  alt=""
                  className="lg:h-10 lg:w-10 h-6 w-6"
                />
              </a>
              <h2 className="lg:text-3xl text-xl text-center text-[#FFF5B9]  font-Cormorant-upright">
                Chetan Patel
              </h2>
            </div>
           

          </div>



          
        </div>
      </div>
    </>
  );
}
8;
