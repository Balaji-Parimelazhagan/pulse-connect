import { Field, FieldInputProps, Form, Formik } from 'formik';
import { Button } from 'primereact/button';
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { useState } from 'react';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { SiGooglemeet } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { IDispute } from '../constants/appContants';
import { disputesMock } from '../mocks/mock';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { BsIncognito } from 'react-icons/bs';

const labelClasses = 'block text-sm font-medium text-foreground';

const departments = [
  { label: 'Accounts', value: 'accounts' },
  { label: 'Recruitment', value: 'recruitment' },
  { label: 'HR', value: 'HR' },
  { label: 'Admin', value: 'admin' },
  { label: 'Sys-Admin', value: 'sys_admin' },
  { label: 'Security', value: 'security' },
  { label: 'Management', value: 'management' },
  { label: 'Managers', value: 'managers' },
  { label: 'Others', value: 'others' },
];

const DisputeLanding = () => {
  const initialValues = disputesMock[0];
  const [showDialog, setShowDialog] = useState(false);

  const validate = (values: IDispute) => {
    const errors: IDispute = {} as {
      abstract: string;
      description: string;
      email?: string;
    };
    if (!values.abstract) errors.abstract = 'Required';
    if (!values.description) errors.description = 'Required';
    if (checked && !values.email) errors.email = 'Required';
    return errors;
  };

  const navigate = useNavigate();

  const onSubmit = (
    values: IDispute,
    { setSubmitting }: { setSubmitting: (e: boolean) => void }
  ) => {
    console.log('dispute', values);
    setSubmitting(false);
    setShowDialog(true);
  };
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="relative">
        <Button
          label={'Try anonymous chat'}
          className="absolute -top-56 right-28 border border-blue-500 text-blue-500 p-1 px-3 rounded-r-full rounded-l-full"
          onClick={() =>
            navigate('/dispute/1413008-I109015/chat', { replace: true })
          }
        >
          <IoChatboxEllipsesOutline size={28} className="ml-2" />
        </Button>
        <Button
          label={'Schedule a meet'}
          className="absolute -top-40 right-28 border border-blue-500 text-blue-500 p-1 px-3 rounded-r-full rounded-l-full"
          onClick={() => navigate('/survey', { replace: true })}
        >
          <SiGooglemeet size={20} className="ml-2" />
        </Button>
        <div className="mt-64 flex flex-col items-center justify-center w-full h-full overflow-hidden p-4 space-y-10">
          <div className="text-5xl mt-1 font-bold"> Manifest your concern</div>
          <div className="text-4xl font-bold w-2/4 text-center">
            We assure you that your identity will not be stored in our system if
            you choose to keep it confidential.
          </div>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="w-3/6 p-6">
                <div className="flex space-x-8">
                  <div className="mb-4">
                    <label className={labelClasses} htmlFor="abstract">
                      Subject *
                    </label>
                    <Field name="abstract">
                      {({ field }: { field: FieldInputProps<any> }) => (
                        <InputText
                          id="abstract"
                          {...field}
                          className={`mt-2 border rounded-md p-2 w-96 ${
                            errors.abstract && touched.abstract
                              ? 'p-invalid'
                              : ''
                          }`}
                          placeholder="Concern on 'X' team performance"
                        />
                      )}
                    </Field>
                    {errors.abstract && touched.abstract && (
                      <small className="p-error">{errors.abstract}</small>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <label className={labelClasses} htmlFor="description">
                    Short Description *
                  </label>
                  <Field name="description">
                    {({ field }: { field: FieldInputProps<any> }) => (
                      <InputTextarea
                        id="description"
                        {...field}
                        rows={4}
                        className={`mt-2 w-full border rounded-md p-2 ${
                          errors.description && touched.description
                            ? 'p-invalid'
                            : ''
                        }`}
                        placeholder="I would like to raise a dispute..."
                      />
                    )}
                  </Field>
                  {errors.description && touched.description && (
                    <small className="p-error">{errors.description}</small>
                  )}
                </div>
                <div className="mb-4 flex gap-1">
                  <Checkbox
                    onChange={(event: CheckboxChangeEvent) =>
                      setChecked(event.checked || false)
                    }
                    checked={checked}
                  ></Checkbox>
                  <span className="text-sm text-muted-foreground">
                    Would you like us to reach out to help resolve this issue?
                  </span>
                </div>
                {checked && (
                  <div className="mb-4">
                    <label className={labelClasses} htmlFor="email">
                      Email
                    </label>
                    <Field name="email">
                      {({ field }: { field: FieldInputProps<any> }) => (
                        <InputText
                          id="email"
                          {...field}
                          className={`mt-2 border rounded-md p-2 ${
                            errors.email && touched.email ? 'p-invalid' : ''
                          }`}
                          placeholder="allen@organization.com"
                        />
                      )}
                    </Field>
                    {errors.email && touched.email && (
                      <small className="p-error ml-2">{errors.email}</small>
                    )}
                  </div>
                )}
                <div className="w-full flex justify-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="border-2 border-blue-500 text-blue-500 p-1 px-3 rounded-r-full rounded-l-full hover:bg-primary/80 transition duration-300"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <img
          src="src/assets/3.jpg"
          className="h-72 absolute -top-64 left-[35%] -z-10"
        />
      </div>
      <ConfirmDialog
        group="headless"
        visible={showDialog}
        onHide={() => setShowDialog(false)}
        content={DialogContent}
        icon="pi pi-exclamation-triangle"
        reject={() => navigate('/dashboard', { replace: true })}
      />
    </>
  );
};

const DialogContent = () => {
  return (
    <div className=" bg-white rounded-lg space-y-2 border-2 border-blue-400 p-5">
      <div className="w-full flex justify-center">
        <div className="bg-white rounded-full border-2 border-gray-500">
          <BsIncognito className="text-gray-600 m-1" size={50} />
        </div>
      </div>

      <p className="pb-6 text-center">
        You Concern
        <span className="text-xl font-extrabold">1413008-I109015</span> has been
        registered<br></br> and you can use this url to track your concern
        anonymously!
      </p>
      <div className="p-2 border-2 bg-blue-100 border-blue-400 text-center rounded cursor-pointer ">
        <a href="http://localhost:5000/dispute/1413008-I109015">
          http://localhost:5000/dispute/1413008-I109015
        </a>
      </div>
    </div>
  );
};

export default DisputeLanding;
