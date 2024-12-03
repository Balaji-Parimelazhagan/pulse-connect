import { Formik, Form, Field, FieldInputProps } from "formik";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { useState } from "react";

const inputClasses =
  "mt-1 block w-full border border-border rounded-md p-2 focus:ring focus:ring-ring transition duration-300";
const errorClasses = "p-invalid";
const labelClasses = "block text-sm font-medium text-foreground";
const smallErrorClasses = "p-error";
const containerClasses = "mb-4";

const departments = [
  { label: "Accounts", value: "accounts" },
  { label: "Recruitment", value: "recruitment" },
  { label: "HR", value: "hr" },
  { label: "Admin", value: "admin" },
  { label: "Sys-Admin", value: "sys_admin" },
  { label: "Security", value: "security" },
  { label: "Management", value: "management" },
  { label: "Managers", value: "managers" },
  { label: "Others", value: "others" },
];

const DisputeForm = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <h1 className="text-xl font-bold mb-4">Dispute Form</h1>
      <Formik
        initialValues={{
          title: "",
          department: null,
          description: "",
          email: "",
        }}
        validate={(values) => {
          const errors: {
            title: string;
            department: string;
            description: string;
            email?: string;
          } = {} as {
            title: string;
            department: string;
            description: string;
            email?: string;
          };
          if (!values.title) errors.title = "Required";
          if (!values.department) errors.department = "Required";
          if (!values.description) errors.description = "Required";
          if (checked && !values.email) errors.email = "Required";
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="w-full max-w-md bg-card p-6 rounded-lg shadow-md">
            <div className={containerClasses}>
              <label className={labelClasses} htmlFor="title">
                Dispute Title *
              </label>
              <Field name="title">
                {({ field }: { field: FieldInputProps<any> }) => (
                  <InputText
                    id="title"
                    {...field}
                    className={`${inputClasses} ${
                      errors.title && touched.title ? errorClasses : ""
                    }`}
                    placeholder="Enter dispute title"
                  />
                )}
              </Field>
              {errors.title && touched.title && (
                <small className={smallErrorClasses}>{errors.title}</small>
              )}
            </div>
            <div className={containerClasses}>
              <label className={labelClasses} htmlFor="department">
                Department *
              </label>
              <Field name="department">
                {({ field }: { field: FieldInputProps<any> }) => (
                  <Dropdown
                    id="department"
                    {...field}
                    options={departments}
                    placeholder="Select a Department"
                    className={`${inputClasses} inline-flex ${
                      errors.department && touched.department
                        ? errorClasses
                        : ""
                    }`}
                  />
                )}
              </Field>
              {errors.department && touched.department && (
                <small className={smallErrorClasses}>{errors.department}</small>
              )}
            </div>
            <div className={containerClasses}>
              <label className={labelClasses} htmlFor="description">
                Short Description *
              </label>
              <Field name="description">
                {({ field }: { field: FieldInputProps<any> }) => (
                  <InputTextarea
                    id="description"
                    {...field}
                    rows={4}
                    className={`${inputClasses} ${
                      errors.description && touched.description
                        ? errorClasses
                        : ""
                    }`}
                    placeholder="Describe the issue"
                  />
                )}
              </Field>
              {errors.description && touched.description && (
                <small className={smallErrorClasses}>
                  {errors.description}
                </small>
              )}
            </div>
            <div className={`${containerClasses} flex gap-1`}>
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
              <div className={containerClasses}>
                <label className={labelClasses} htmlFor="email">
                  Email
                </label>
                <Field name="email">
                  {({ field }: { field: FieldInputProps<any> }) => (
                    <InputText
                      id="email"
                      {...field}
                      className={`${inputClasses} ${
                        errors.email && touched.email ? errorClasses : ""
                      }`}
                      placeholder="Enter your email"
                    />
                  )}
                </Field>
                {errors.email && touched.email && (
                  <small className={smallErrorClasses}>{errors.email}</small>
                )}
              </div>
            )}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-400 text-white p-1 px-1.5 rounded-none hover:bg-primary/80 transition duration-300"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DisputeForm;
