import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import { demoPagesMenu } from '../../../menu';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Button from '../../../components/bootstrap/Button';
import Icon from '../../../components/icon/Icon';
import Input from '../../../components/bootstrap/forms/Input';
import PaginationButtons from '../../../components/PaginationButtons';
import { useProjects } from './ProjectsContext'; // <-- use context
import { useNavigate } from 'react-router-dom'; // Add this import

const ProjectRoad: React.FC = () => {
    const { projects } = useProjects();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(5);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const navigate = useNavigate(); // Add this line

    // Dynamic search filter for all relevant fields
    const filteredProjects = projects.filter((item) =>
        searchTerm === '' ||
        (item.code && item.code.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.projectName && item.projectName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.members && item.members.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.startDate && item.startDate.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.deadline && item.deadline.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.client && item.client.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.status && item.status.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Paginate filtered data
    const filteredData = [...filteredProjects]
        .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0))
        .slice((currentPage - 1) * perPage, currentPage * perPage);

    return (
        <PageWrapper title={demoPagesMenu.crm.subMenu.customersList.text}>
            <SubHeader>
                <SubHeaderLeft>
                    <label
                        className='border-0 bg-transparent cursor-pointer me-0'
                        htmlFor='searchInput'
                        aria-label='Search'>
                        <Icon icon='Search' size='2x' color='primary' />
                    </label>
                    <Input
                        id='searchInput'
                        type='search'
                        className='border-0 shadow-none bg-transparent'
                        placeholder='Search..'
                        value={searchTerm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    />
                </SubHeaderLeft>
                <SubHeaderRight>
                    <Button
                        color='primary'
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
                                            <th>Code</th>
                                            <th>Project Name</th>
                                            <th>Members</th>
                                            <th>Start Date</th>
                                            <th>Deadline</th>
                                            <th>Client</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.length > 0 ? (
                                            filteredData.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item?.code || 'N/A'}</td>
                                                    <td>{item?.projectName || 'N/A'}</td>
                                                    <td>
                                                        {item?.members && item.members.trim() !== '' ? (
                                                            item.members
                                                        ) : (
                                                            <Button
                                                                color="secondary"
                                                                isLight
                                                                size="sm"
                                                                className="d-flex align-items-center"
                                                                onClick={() => {
                                                                    // handle add members logic here
                                                                    console.log('Add members to project:', item);
                                                                }}
                                                            >
                                                                <Icon icon="Add" className="me-1" />
                                                                Add Project Members
                                                            </Button>
                                                        )}
                                                    </td>
                                                    <td>{item?.startDate || 'N/A'}</td>
                                                    <td>{item?.deadline || 'N/A'}</td>
                                                    <td>{item?.client || 'N/A'}</td>
                                                    <td>
                                                        {/* Show status as plain text */}
                                                        {item?.status || 'N/A'}
                                                    </td>
                                                    <td>
                                                        <Button
                                                            color="primary"
                                                            isLight
                                                            className="d-flex align-items-center"
                                                            onClick={() => {
                                                                navigate(`/project-roadmap/view/${item.code}`, { state: { project: item } });
                                                            }}
                                                        >
                                                            <Icon icon="Visibility" className="me-2" />
                                                            View
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={8} className='text-center'>
                                                    No data available
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </CardBody>
                            <PaginationButtons
                                data={filteredProjects}
                                label='items'
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                                perPage={perPage}
                                setPerPage={setPerPage}
                            />
                        </Card>
                    </div>
                </div>
            </Page>
        </PageWrapper>
    );
};

export default ProjectRoad;