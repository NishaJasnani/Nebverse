import React, { useState } from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight, SubheaderSeparator } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import { demoPagesMenu } from '../../../menu';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Input from '../../../components/bootstrap/forms/Input';
import Dropdown, { DropdownMenu, DropdownToggle } from '../../../components/bootstrap/Dropdown';
import useSortableData from '../../../hooks/useSortableData';
import Popovers from '../../../components/bootstrap/Popovers';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../../components/PaginationButtons';
import Button from '../../../components/bootstrap/Button';
import Icon from '../../../components/icon/Icon';
import FilterModal from './FilterModal';
import AddDepartmentModal from './AddDepartmentModal';
import ViewDepartmentModal from './ViewDepartmentModal'; // 1. Import the modal

interface Department {
    id: number;     
    name: string;
    parentDepartment?: string;
}

const Department = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(PER_COUNT['10']);
    const [editModalStatus, setEditModalStatus] = useState<boolean>(false);
    const [filterModalStatus, setFilterModalStatus] = useState<boolean>(false);
    const [originalDepartments, setOriginalDepartments] = useState<Department[]>([]);
    const [departments, setDepartments] = useState<Department[]>([]);
    const [selectedTeam, setSelectedTeam] = useState<Department | undefined>(undefined);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [viewModalStatus, setViewModalStatus] = useState<boolean>(false); // 2. Add state for view modal
    const [viewDepartment, setViewDepartment] = useState<Department | undefined>(undefined); // 2. Add state for selected department

    // Filter departments dynamically based on searchTerm
    const filteredData = departments.filter((dept) =>
        searchTerm === '' ||
        dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (dept.parentDepartment && dept.parentDepartment.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const { items } = useSortableData(filteredData);

    const handleDelete = (id: number) => {
        setDepartments((prev) => prev.filter((dept) => dept.id !== id));
        setOriginalDepartments((prev) => prev.filter((dept) => dept.id !== id));
    };

    return (
        <PageWrapper title={demoPagesMenu.crm.subMenu.customersList.text}>
            <SubHeader>
                <SubHeaderLeft>
                    <label className='border-0 bg-transparent cursor-pointer me-0' htmlFor='searchInput'>
                        <Icon icon='Search' size='2x' color='primary' />
                    </label>
                    <Input
                        id='searchInput'
                        type='search'
                        className='border-0 shadow-none bg-transparent'
                        placeholder='Search department...'
                        value={searchTerm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    />
                </SubHeaderLeft>
                <SubHeaderRight>
                    <Button
                        icon="FilterAlt"
                        color="dark"
                        isLight
                        className="btn-only-icon position-relative"
                        aria-label="Filter"
                        onClick={() => setFilterModalStatus(true)}
                    >
                        {departments.length !== filteredData.length && (
                            <Popovers desc="Filtering applied" trigger="hover">
                                <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
                                    <span className="visually-hidden">Filtering applied</span>
                                </span>
                            </Popovers>
                        )}
                    </Button>
                    <SubheaderSeparator />
                    <Button icon='PersonAdd' color='primary' isLight onClick={() => {
                        setSelectedTeam(undefined);
                        setEditModalStatus(true);
                    }}>
                        Add Department
                    </Button>
                    <Button
                        color='info'
                        icon='CloudDownload'
                        isLight
                        tag='a'
                        to='/somefile.txt'
                        target='_blank'
                        download>
                        Export
                    </Button>
                </SubHeaderRight>
            </SubHeader>

            <Page>
                <div className='row h-100'>
                    <div className='col-12'>
                        <Card stretch>
                            <CardBody isScrollable className='table-responsive'>
                                <table className='table table-modern table-hover'>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Parent Department</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataPagination(items, currentPage, perPage).map((i) => (
                                            <tr key={i.id}>
                                                <td>{i.name}</td>
                                                <td>{i.parentDepartment || 'N/A'}</td>
                                                <td>
                                                    <Dropdown>
                                                        <DropdownToggle hasIcon={false}>
                                                            <Button icon='MoreVert' color='primary' isLight />
                                                        </DropdownToggle>
                                                        <DropdownMenu isAlignmentEnd>
                                                            <Button
                                        color="link"
                                       className="dropdown-item"
                                       onClick={() => {
                                            setViewDepartment(i); // 3. Set selected department
                                            setViewModalStatus(true); // 3. Open modal
                                        }}
                              >
                                <Icon icon="RemoveRedEye" className="me-2" /> View
                              </Button>
                                                            <Button
                                                                color='link'
                                                                className='dropdown-item'
                                                                onClick={() => {
                                                                    setSelectedTeam(i);
                                                                    setEditModalStatus(true);
                                                                }}>
                                                                <Icon icon='Edit' className='me-2' />
                                                                Update
                                                            </Button>
                                                            <Button
                                                                color='link'
                                                                className='dropdown-item text-danger'
                                                                onClick={() => handleDelete(i.id)}>
                                                                <Icon icon='Delete' className='me-2' />
                                                                Delete
                                                            </Button>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </CardBody>
                            <PaginationButtons
                                data={filteredData}
                                label='Departments'
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                                perPage={perPage}
                                setPerPage={setPerPage}
                            />
                        </Card>
                    </div>
                </div>
            </Page>

            <AddDepartmentModal
                isOpen={editModalStatus}
                setIsOpen={setEditModalStatus}
                onAddDepartment={(newDept) => {
                    if (selectedTeam) {
                        // Update case
                        setDepartments((prev) =>
                            prev.map((dept) => (dept.id === selectedTeam.id ? { ...dept, ...newDept } : dept))
                        );
                        setOriginalDepartments((prev) =>
                            prev.map((dept) => (dept.id === selectedTeam.id ? { ...dept, ...newDept } : dept))
                        );
                    } else {
                        // Add new case
                        const newId = Date.now();
                        setDepartments((prev) => [...prev, { ...newDept, id: newId }]);
                        setOriginalDepartments((prev) => [...prev, { ...newDept, id: newId }]);
                    }
                }}
            />

            <FilterModal
                isOpen={filterModalStatus}
                setIsOpen={setFilterModalStatus}
                departments={originalDepartments.map((dept) => dept.name)}
                onApplyFilters={(filters) => {
                    if (!filters.department || filters.department === 'All') {
                        setDepartments(originalDepartments);
                    } else {
                        setDepartments(
                            originalDepartments.filter((dept) =>
                                filters.department ? dept.name === filters.department : true
                            )
                        );
                    }
                }}
            />

            {/* 4. Render the ViewDepartmentModal */}
            <ViewDepartmentModal
                isOpen={viewModalStatus}
                setIsOpen={setViewModalStatus}
                department={viewDepartment}
            />
        </PageWrapper>
    );
};
export default Department;
