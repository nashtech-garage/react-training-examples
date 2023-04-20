import {Fragment} from "react";
import {useForm} from "react-hook-form";

import './sing-on.css';
import {Field, Form, Formik} from "formik";

interface SubmissionData {
    [key: string]: any;
}

const SignOnPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const onSubmit = (data: SubmissionData) => console.log(data);

    return (
        <Fragment>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 ">
                            <form onSubmit={handleSubmit(onSubmit)} className="billing-form">
                                <h3 className="mb-4 billing-heading">Sign On</h3>
                                <div className="row align-items-end">
                                    <div className="col-md-6">
                                        <div className={errors.firstName ? 'form-group has-error' : 'form-group'}>
                                            <label htmlFor="firstname">First Name</label>
                                            <input
                                                {...register('firstName', {required: true})}
                                                aria-invalid={errors.firstName ? "true" : "false"}
                                                type="text" className="form-control" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={errors.lastName ? 'form-group has-error' : 'form-group'}>
                                            <label htmlFor="lastname">Last Name</label>
                                            <input
                                                {...register('lastName', {required: true})}
                                                aria-invalid={errors.lastName ? "true" : "false"}
                                                type="text" className="form-control" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="country">State / Country</label>
                                            <div className="select-wrap">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select {...register('country')} name="" id="" className="form-control">
                                                    <option value="">France</option>
                                                    <option value="">Italy</option>
                                                    <option value="">Philippines</option>
                                                    <option value="">South Korea</option>
                                                    <option value="">Hongkong</option>
                                                    <option value="">Japan</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="streetaddress">Street Address</label>
                                            <input {...register('streetAddress')} type="text" className="form-control"
                                                   placeholder="House number and street name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input {...register('apartmentNo')} type="text" className="form-control"
                                                   placeholder="Appartment, suite, unit etc: (optional)"/>
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="towncity">Town / City</label>
                                            <input {...register('city')} type="text" className="form-control"
                                                   placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="postcodezip">Postcode / ZIP *</label>
                                            <input {...register('zip')} type="text" className="form-control"
                                                   placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input {...register('phone')} type="text" className="form-control"
                                                   placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="emailaddress">Email Address</label>
                                            <input {...register('email')} type="text" className="form-control"
                                                   placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-12">
                                        <div className="form-group mt-4">
                                            <div className="radio">
                                                <label className="mr-3">
                                                    <input {...register('newsLetter')} type="checkbox"
                                                           name="optradio"/> Receive news letter</label>
                                                <label>
                                                    <input {...register('asShippingAdd')} type="checkbox"
                                                           name="optradio"/> Use as shipping address</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className='btn btn-primary px-4'>Sign On</button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}

const SignOnPage2 = () => {
    return (
        <Fragment>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 ">
                            <Formik
                                initialValues={{firstName: ''}}
                                validate={(values) => console.log(values)}
                                onSubmit={(values) => console.log(values)}>
                                {({errors, touched, isValidating }) =>
                                    (
                                        <Form className="billing-form">
                                            <h3 className="mb-4 billing-heading">Sign On</h3>
                                            <div className="row align-items-end">
                                                <div className="col-md-6">
                                                    <div className={errors.firstName ? 'form-group has-error' : 'form-group'}>
                                                        <label htmlFor="firstname">First Name</label>
                                                        <Field
                                                            name="firstName"
                                                            validate={(value: string) => !value}
                                                            render={({ field }: any) => (
                                                                <input
                                                                    {...field}
                                                                    aria-invalid={errors.firstName ? "true" : "false"}
                                                                    type="text" className="form-control" placeholder=""/>)
                                                            }/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="lastname">Last Name</label>
                                                        <input type="text" className="form-control" placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="country">State / Country</label>
                                                        <div className="select-wrap">
                                                            <div className="icon"><span className="ion-ios-arrow-down"></span>
                                                            </div>
                                                            <select name="" id="" className="form-control">
                                                                <option value="">France</option>
                                                                <option value="">Italy</option>
                                                                <option value="">Philippines</option>
                                                                <option value="">South Korea</option>
                                                                <option value="">Hongkong</option>
                                                                <option value="">Japan</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="streetaddress">Street Address</label>
                                                        <input type="text" className="form-control"
                                                               placeholder="House number and street name"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="Appartment, suite, unit etc: (optional)"/>
                                                    </div>
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="towncity">Town / City</label>
                                                        <input type="text" className="form-control" placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="postcodezip">Postcode / ZIP *</label>
                                                        <input type="text" className="form-control" placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="phone">Phone</label>
                                                        <input type="text" className="form-control" placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="emailaddress">Email Address</label>
                                                        <input type="text" className="form-control" placeholder=""/>
                                                    </div>
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col-md-12">
                                                    <div className="form-group mt-4">
                                                        <div className="radio">
                                                            <label className="mr-3">
                                                                <input type="checkbox"
                                                                       name="optradio"/> Receive news letter</label>
                                                            <label>
                                                                <input type="checkbox"
                                                                       name="optradio"/> Use as shipping address</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className='btn btn-primary px-4'>Sign On</button>
                                        </Form>
                                    )
                                }

                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}


export {SignOnPage, SignOnPage2}
