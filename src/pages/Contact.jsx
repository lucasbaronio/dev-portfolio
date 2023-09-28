import React from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  const watchAll = watch();

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

  const inputs = [
    {
      divClassName: '',
      fieldName: 'name',
      label: '_name',
      inputProps: {
        type: 'text',
        maxLength: 100,
        placeholder: 'Ej: Juan Perez',
      },
      reactFormInputOptions: {
        required: 'This field is required',
        maxLength: {
          value: 100,
          message: 'El nombre y apellido no puede tener mas de 100 caracteres.',
        },
      },
    },
    {
      divClassName: '',
      fieldName: 'email',
      label: '_email',
      inputProps: {
        type: 'text',
        maxLength: 100,
      },
      reactFormInputOptions: {
        required: 'This field is required',
        pattern: {
          value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: 'Please enter a correct email',
        },
        maxLength: {
          value: 100,
          message: 'Email cannot be longer than 100 characters.',
        },
      },
    },
    {
      divClassName: '',
      fieldName: 'message',
      label: '_message',
      inputProps: {
        type: 'text',
        maxLength: 200,
        style: { height: '150px', resize: 'none' },
      },
      textArea: true,
      reactFormInputOptions: {
        required: 'This field is required',
        maxLength: {
          value: 200,
          message: 'Email cannot be longer than 200 characters.',
        },
      },
    },
  ];

  const onSubmit = async (payload) => {
    console.log(payload);
  };

  return (
    <section className="flex flex-col lg:flex-row h-full">
      <div className="flex flex-1 items-center justify-center lg:w-1/2 lg:border-r border-r-slate-800">
        <form
          className="w-full py-4 px-4 mx-auto max-w-lg lg:py-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className=" flex flex-col gap-4">
            {inputs.map(
              ({ fieldName, divClassName, label, inputProps, reactFormInputOptions, textArea }) => {
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
              },
            )}
          </div>
          <Button
            className="my-8"
            type="submit"
            gradientDuoTone="purpleToBlue"
            // disabled={isLoading}
            // isProcessing={isLoading}
            size="sm"
          >
            <p>submit-message</p>
          </Button>
        </form>
      </div>
      <div className="flex lg:w-1/2 px-2 border-t lg:border-none border-t-slate-800">
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
    </section>
  );
};

export default Contact;
