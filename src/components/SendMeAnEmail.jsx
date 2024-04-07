import React, { useState } from 'react';
import Send from '../assets/send.svg';
import Copy from '../assets/copy.svg';
import Check from '../assets/check.svg';
import { useTranslation } from 'react-i18next';

const MY_EMAIL = 'lucas.baronio@gmail.com';

const SendMeAnEmail = () => {
  const { t } = useTranslation();
  const [copyStatus, setCopyStatus] = useState(false);

  const copyToClipboard = async () => {
    navigator.clipboard.writeText(MY_EMAIL);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
  };

  return (
    <div className="w-full max-w-sm px-2">
      <div className="relative select-none">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full px-2.5 py-4 dark:bg-bg-300 dark:border-text-700 dark:text-text-300 pointer-events-none"
          value={MY_EMAIL}
          disabled
          readOnly
        />
        <div className="absolute end-2.5 top-1/2 -translate-y-1/2 flex gap-1">
          <button
            onClick={copyToClipboard}
            className="dark:bg-bg-100 dark:border-text-700 dark:hover:bg-bg-300 rounded-lg py-2 px-2.5 inline-flex items-center justify-center border"
          >
            {!copyStatus ? (
              <span className="inline-flex items-center">
                <img src={Copy} className="w-3 h-3 me-1.5" />
                <span className="text-xs font-semibold">
                  {t('contact.sendMeAnEmail.copyButton')}
                </span>
              </span>
            ) : (
              <span className="inline-flex items-center">
                <img src={Check} className="w-3 h-3 me-1.5" />
                <span className="text-xs font-semibold text-accent-100 dark:text-accent-100">
                  Copied
                </span>
              </span>
            )}
          </button>
          <a
            href={`mailto:${MY_EMAIL}`}
            className="hover:bg-bg-300 dark:bg-bg-100 dark:border-text-700 dark:hover:bg-bg-300 rounded-lg py-2 px-2.5 inline-flex items-center justify-center border"
          >
            <span className="inline-flex items-center">
              <img src={Send} alt="Send an email" className=" fill-text-700" width={20} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SendMeAnEmail;
