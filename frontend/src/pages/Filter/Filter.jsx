import React, { useState } from "react";
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";
import Button from "@kiwicom/orbit-components/lib/Button";
import Select from "@kiwicom/orbit-components/lib/Select";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Loading from "@kiwicom/orbit-components/lib/Loading";
<<<<<<< Updated upstream
import './filter.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
=======
>>>>>>> Stashed changes

const FilterSchema = Yup.object().shape({
  interest: Yup.string()
    .required("Required").min(2, "Too Short!"),
  location: Yup.string()
    .required("Required").min(2, "Too Short!"),

});

function Filter() {
  const Option = [{ value: "tech", label: "Tech" }, { value: "music", label: "Music" }];
  const LocationOption = [{ value: "europe", label: "Europe" }, { value: "asia", label: "Asia" }];
  const [loading, SetLoading] = useState(false);


  if (loading) {
    return (
      <Layout type="MMB">
        <LayoutColumn>
          <Loading type="pageLoader" text="Finding events for you!" />
        </LayoutColumn>
      </Layout>
    );
  }

  return (
<<<<<<< Updated upstream
    
=======
>>>>>>> Stashed changes
    <Formik
      initialValues={{
        interest: "",
        location: "",
      }}
      validationSchema={FilterSchema}
      onSubmit={(values) => {
        SetLoading(true);
        setTimeout(() => {
          console.log(values);
          SetLoading(false);
        }, 3000);
      }}
    >
      {({
        errors, touched, values, handleChange, handleSubmit,
      }) => (
<<<<<<< Updated upstream
        <><Header />
        <Layout type="MMB" >
          <LayoutColumn >
            <div className="form">        
              <Form onSubmit={handleSubmit} >
                <Select
                  id="select-interest-id"
                  required
                  placeholder="Select your interests..."
                  size="normal"
                  options={Option}
                  disabled={false}
                  name="interest"
                  label="Interests"
                  onChange={handleChange}
                  dataTest="test"
                  value={values.interest}
                  customValueText={null}
                  spaceAfter="large"
                  error={(touched.interest && errors.interest) && <div>{errors.interest}</div>}
                />
                <Select
                  id="select-location-id"
                  required
                  placeholder="Location..."
                  size="normal"
                  options={LocationOption}
                  disabled={false}
                  name="location"
                  label="Location"
                  onChange={handleChange}
                  dataTest="test"
                  value={values.location}
                  customValueText={null}
                  spaceAfter="large"
                  error={(touched.location && errors.location) && <div>{errors.location}</div>}
                />
                <Button submit>Filter</Button>
              </Form>
            </div>
          </LayoutColumn>
        </Layout>
        <Footer />
        </>
=======
        <Layout type="MMB">
          <LayoutColumn>
            <Form onSubmit={handleSubmit}>
              <Select
                id="select-interest-id"
                required
                placeholder="Select your interests..."
                size="normal"
                options={Option}
                disabled={false}
                name="interest"
                label="Interests"
                onChange={handleChange}
                dataTest="test"
                value={values.interest}
                customValueText={null}
                spaceAfter="large"
                error={(touched.interest && errors.interest) && <div>{errors.interest}</div>}
              />
              <Select
                id="select-location-id"
                required
                placeholder="Location..."
                size="normal"
                options={LocationOption}
                disabled={false}
                name="location"
                label="Location"
                onChange={handleChange}
                dataTest="test"
                value={values.location}
                customValueText={null}
                spaceAfter="large"
                error={(touched.location && errors.location) && <div>{errors.location}</div>}
              />
              <Button submit>Filter</Button>
            </Form>
          </LayoutColumn>
        </Layout>
>>>>>>> Stashed changes

      )}
    </Formik>


  );
}


export default Filter;
