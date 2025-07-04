
import React, { FC, useState } from 'react';
import { useFormik } from 'formik';
import Modal, {
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTitle,
} from '../../../components/bootstrap/Modal';
import Button from '../../../components/bootstrap/Button';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Select from '../../../components/bootstrap/forms/Select';
import Textarea from '../../../components/bootstrap/forms/Textarea';

interface CreateTimeLogInvoiceProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const CreateTimeLogInvoice: FC<CreateTimeLogInvoiceProps> = ({ isOpen, setIsOpen }) => {
    const [discountType, setDiscountType] = useState('%');

    const formik = useFormik({
        initialValues: {
            invoiceNumber: '1',
            project: '',
            client: '',
            invoiceDate: '2025-04-17',
            dueDate: '2025-05-02',
            timeLogFrom: '2025-04-10',
            timeLogTo: '2025-04-17',
            currency: 'INR (₹)',
            exchangeRate: '',
            calculateTax: 'After Discount',
            generatedBy: 'rana',
            discount: '0',
            note: '',
        },
        onSubmit: (values) => {
            console.log('Invoice Submitted:', values);
            setIsOpen(false);
        },
    });

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} size="xl" isCentered>
            <ModalHeader setIsOpen={setIsOpen}>
                <ModalTitle id="CutomerEditModal">Create TimeLog Invoice</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row g-3">
                        <FormGroup label="Invoice Number *" className="col-md-4">
                            <Input name="invoiceNumber" value={formik.values.invoiceNumber} onChange={formik.handleChange} />
                        </FormGroup>
                        <FormGroup label="Project" className="col-md-4">
                            <Select name="project" value={formik.values.project} onChange={formik.handleChange} ariaLabel="Project Selection">
                                <option>Nothing selected</option>
                            </Select>
                        </FormGroup>
                        <FormGroup label="Client" className="col-md-4">
                            <Input name="client" value={formik.values.client} onChange={formik.handleChange} />
                        </FormGroup>

                        <FormGroup label="Invoice Date" className="col-md-4">
                            <Input type="date" name="invoiceDate" value={formik.values.invoiceDate} onChange={formik.handleChange} />
                        </FormGroup>
                        <FormGroup label="Due Date" className="col-md-4">
                            <Input type="date" name="dueDate" value={formik.values.dueDate} onChange={formik.handleChange} />
                        </FormGroup>
                        <FormGroup label="Currency" className="col-md-4">
                            <Select name="currency" value={formik.values.currency} onChange={formik.handleChange} ariaLabel="Currency Selection">
                                <option>INR (₹)</option>
                            </Select>
                        </FormGroup>

                        <FormGroup label="Exchange Rate *" className="col-md-4">
                            <Input name="exchangeRate" value={formik.values.exchangeRate} onChange={formik.handleChange} />
                        </FormGroup>
                        <FormGroup label="Time Log From" className="col-md-4">
                            <Input type="date" name="timeLogFrom" value={formik.values.timeLogFrom} onChange={formik.handleChange} />
                        </FormGroup>
                        <FormGroup label="Time Log To" className="col-md-4">
                            <Input type="date" name="timeLogTo" value={formik.values.timeLogTo} onChange={formik.handleChange} />
                        </FormGroup>

                        <FormGroup label="Calculate Tax" className="col-md-4">
                            <Select name="calculateTax" value={formik.values.calculateTax} onChange={formik.handleChange} ariaLabel="Calculate Tax Selection">
                                <option>After Discount</option>
                                <option>Before Discount</option>
                            </Select>
                        </FormGroup>
                        <FormGroup label="Generated By" className="col-md-4">
                            <Select name="generatedBy" value={formik.values.generatedBy} onChange={formik.handleChange} ariaLabel="Generated By Selection">
                                <option>-</option>
                            </Select>
                        </FormGroup>
                    </div>

                    <div className="row g-3 mt-4">
                        <FormGroup label="Note for the recipient" className="col-md-8">
                            <Textarea
                                name="note"
                                value={formik.values.note}
                                onChange={formik.handleChange}
                                placeholder="e.g. Thank you for your business"
                            />
                        </FormGroup>

                        <div className="col-md-4 bg-light p-3 rounded">
                            <div className="d-flex justify-content-between border-bottom py-1">
                                <span>Sub Total</span><span>0.00</span>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-1">
                                <span>Discount</span>
                                <Input name="discount" className="w-25" value={formik.values.discount} onChange={formik.handleChange} />
                                <Select value={discountType} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDiscountType(e.target.value)} className="w-25" ariaLabel="Discount Type Selection">
                                    <option>%</option>
                                    <option>₹</option>
                                </Select>
                                <span>0.00</span>
                            </div>
                            <div className="d-flex justify-content-between border-bottom py-1">
                                <span>Tax</span><span>0.00</span>
                            </div>
                            <div className="d-flex justify-content-between py-2 fw-semibold">
                                <span>Total</span><span>0.00</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h6>Terms and Conditions</h6>
                        <p className="text-muted">Thank you for your business.</p>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button color="primary" onClick={formik.handleSubmit}>Save</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTimeLogInvoice;
