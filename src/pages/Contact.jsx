import React, { useEffect, useState } from 'react';
import { Button, Label, TextInput, Textarea, Toast } from 'flowbite-react';
import { FaTelegramPlane } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { useForm } from 'react-hook-form';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useSendMessage } from '../services/mutations';
import { useTranslation } from 'react-i18next';

const INPUTS = [
  (t) => ({
    divClassName: '',
    fieldName: 'name',
    label: t('contact.inputs.name.label'),
    inputProps: {
      type: 'text',
      maxLength: 100,
      // placeholder: 'Ej: Juan Perez',
    },
    reactFormInputOptions: {
      required: t('contact.inputs.name.required'),
      maxLength: {
        value: 100,
        message: t('contact.inputs.name.maxLength'),
      },
    },
  }),
  (t) => ({
    divClassName: '',
    fieldName: 'email',
    label: t('contact.inputs.email.label'),
    inputProps: {
      type: 'text',
      maxLength: 100,
    },
    reactFormInputOptions: {
      required: t('contact.inputs.email.required'),
      pattern: {
        value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: t('contact.inputs.email.valid'),
      },
      maxLength: {
        value: 100,
        message: t('contact.inputs.email.maxLength'),
      },
    },
  }),
  (t) => ({
    divClassName: '',
    fieldName: 'message',
    label: t('contact.inputs.message.label'),
    inputProps: {
      type: 'text',
      maxLength: 200,
      style: { height: '150px', resize: 'none' },
    },
    textArea: true,
    reactFormInputOptions: {
      required: t('contact.inputs.message.required'),
      maxLength: {
        value: 200,
        message: t('contact.inputs.message.maxLength'),
      },
    },
  }),
];

const NotificationToast = ({ isAnError }) => {
  const { t } = useTranslation();
  const IconComponent = isAnError ? HiX : FaTelegramPlane;
  return (
    <div className="fixed right-4 bottom-20 max-w-[80vw] xs:max-w-full space-x-4 divide-x divide-gray-200 dark:divide-gray-700">
      <Toast>
        <IconComponent className="h-5 w-5 text-accent-100 dark:text-accent-100" />
        <div className="pl-4 text-sm font-normal text-primary-400">
          {isAnError ? t('contact.toast.error') : t('contact.toast.success')}
        </div>
      </Toast>
    </div>
  );
};

const Contact = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  const watchAll = watch();
  const {
    reset: resetSubmit,
    mutate: submitSendMessage,
    isLoading,
    isSuccess,
    isError,
  } = useSendMessage();

  useEffect(() => {
    if (isSuccess || isError) {
      setShow(true);
      if (isSuccess) reset();
      setTimeout(() => {
        setShow(false);
        resetSubmit();
      }, 5000);
    }
  }, [isSuccess, isError, reset]);

  const codeString = `const submitButton = document.querySelector('#sendBtn');

const message = {
  name: "${watchAll['name']}",
  email: "${watchAll['email']}",
  message: "${watchAll['message']}",
  date: new Date(),
};

['name', 'email', 'message'].forEach(field => {
  if (!message[field])
    document.getElementById(\`#error-\${field}\`).innerHTML = 'This field is required';
  else
    document.getElementById(\`#error-\${field}\`).innerHTML = '';
})

if (!isValidEmail(message._email))
  document.getElementById('#errorEmail').innerHTML = 'Please enter a correct email'

button.addEventListener('click', () => {
  form.send(message);
});
`;

  const buildBlocksMsg = ({ name, email, message }) => {
    return [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: 'Nuevo mensaje en DevPortfolio!',
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Nombre:*\n${name}`,
          },
          {
            type: 'mrkdwn',
            text: `*Mail:*\n${email}`,
          },
          {
            type: 'mrkdwn',
            text: `*Mensaje:*\n${message}`,
          },
        ],
      },
    ];
  };

  const onSubmit = async (payload) => {
    const message = {
      message: 'Nuevo mensaje en DevPortfolio!',
      blocks: buildBlocksMsg(payload),
    };
    submitSendMessage(message, {
      onSuccess: () => {},
      onError: (error) => console.error(error.message),
    });
  };

  return (
    <section className="relative flex flex-col lg:flex-row h-full">
      <div className="flex flex-1 items-center justify-center lg:w-1/2 lg:border-r border-r-bg-200">
        <form
          className="w-full py-4 px-4 mx-auto max-w-lg lg:py-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-2xl text-primary-300 text-center my-6">{t('contact.title')}</h2>
          <div className=" flex flex-col gap-4">
            {INPUTS.map((getInputProps) => {
              const {
                fieldName,
                divClassName,
                label,
                inputProps,
                reactFormInputOptions,
                textArea,
              } = getInputProps(t);
              const Input = textArea ? Textarea : TextInput;
              return (
                <div key={fieldName} className={divClassName}>
                  <div className="mb-2 block">
                    <Label htmlFor={fieldName} value={label} />
                  </div>
                  <Input
                    id={fieldName}
                    name={fieldName}
                    {...inputProps}
                    {...register(fieldName, reactFormInputOptions)}
                    color={errors[fieldName] && 'failure'}
                    helperText={errors[fieldName] && <span>{errors[fieldName].message}</span>}
                  />
                </div>
              );
            })}
          </div>
          <Button
            className="my-8"
            type="submit"
            gradientDuoTone="greenToBlue"
            disabled={isLoading || isError}
            isProcessing={isLoading}
            size="sm"
          >
            <span>{t('contact.inputs.submit.label')}</span>
          </Button>
        </form>
      </div>
      <div className="flex lg:w-1/2 px-2 border-t lg:border-none border-t-bg-200">
        <div className="flex gap-6 w-full text-sm">
          <SyntaxHighlighter
            language="javascript"
            customStyle={{ background: 'transparent', color: 'white' }}
            showLineNumbers={true}
            style={vs2015}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
      {show ? <NotificationToast isAnError={Boolean(isError)} /> : null}
    </section>
  );
};

export default Contact;
