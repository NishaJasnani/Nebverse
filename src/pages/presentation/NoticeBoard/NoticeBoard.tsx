/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, { SubHeaderLeft, SubHeaderRight, SubheaderSeparator } from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import { demoPagesMenu } from '../../../menu';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Input from '../../../components/bootstrap/forms/Input';
import Dropdown, { DropdownMenu, DropdownToggle } from '../../../components/bootstrap/Dropdown';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import useSortableData from '../../../hooks/useSortableData';
import Popovers from '../../../components/bootstrap/Popovers';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../../components/PaginationButtons';
import Button from '../../../components/bootstrap/Button';
import Icon from '../../../components/icon/Icon';
import AddNotice from '../NoticeBoard/AddNotice';
import ViewNoticeModal from '../NoticeBoard/ViewNoticeModal';

interface Notice {
  id: number;
  name: string;
  parentDepartment?: string;
  date?: string;
  summary?: string;
}

const noticeBoard = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(PER_COUNT['10']);
  const [editModalStatus, setEditModalStatus] = useState<boolean>(false);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [selectedNotice, setSelectedNotice] = useState<Notice | undefined>(undefined);
  const [viewModalStatus, setViewModalStatus] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>(''); // <-- Add searchTerm state

  // Dynamic search filter for all relevant fields
  const filteredData = notices.filter((notice) =>
    searchTerm === '' ||
    notice.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (notice.parentDepartment && notice.parentDepartment.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (notice.date && notice.date.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (notice.summary && notice.summary.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const { items } = useSortableData(filteredData);

  const handleDelete = (id: number) => {
    setNotices((prev) => prev.filter((notice) => notice.id !== id));
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
            placeholder='Search...'
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          />
        </SubHeaderLeft>
        <SubHeaderRight>
          <Dropdown>
            <DropdownToggle hasIcon={false}>
              <Button icon='FilterAlt' color='dark' isLight className='btn-only-icon position-relative' aria-label='Filter'>
                {notices.length !== filteredData.length && (
                  <Popovers desc='Filtering applied' trigger='hover'>
                    <span className='position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2'>
                      <span className='visually-hidden'>Filtering applied</span>
                    </span>
                  </Popovers>
                )}
              </Button>
            </DropdownToggle>
            <DropdownMenu isAlignmentEnd size='lg'>
              <div className='container py-2'>
                <div className='row g-3'>
                  <FormGroup label='Filter options' className='col-12'>
                    <p>Custom filters can go here.</p>
                  </FormGroup>
                </div>
              </div>
            </DropdownMenu>
          </Dropdown>
          <SubheaderSeparator />
          <Button
            icon='Add'
            color='primary'
            isLight
            onClick={() => {
              setSelectedNotice(undefined);
              setEditModalStatus(true);
            }}>
            Add New Notice
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
                      <th>Notice</th>
                      <th>Date</th>
                      <th>To</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataPagination(items, currentPage, perPage).map((i) => (
                      <tr key={i.id}>
                        <td>{i.name}</td>
                        <td>{i.date || 'N/A'}</td>
                        <td>{i.parentDepartment || 'N/A'}</td>
                        <td>
                          <Dropdown>
                            <DropdownToggle hasIcon={false}>
                              <Button icon='MoreVert' color='primary' isLight className='btn-icon' />
                            </DropdownToggle>
                            <DropdownMenu isAlignmentEnd>
                              <Button
                                color='link'
                                className='dropdown-item'
                                onClick={() => {
                                  setSelectedNotice(i);
                                  setViewModalStatus(true);
                                }}>
                                <Icon icon='Visibility' className='me-2' />
                                View
                              </Button>
                              <Button
                                color='link'
                                className='dropdown-item'
                                onClick={() => {
                                  setSelectedNotice(i);
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
                label='Notice Board'
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                perPage={perPage}
                setPerPage={setPerPage}
              />
            </Card>
          </div>
        </div>
      </Page>
      <ViewNoticeModal
        isOpen={viewModalStatus}
        setIsOpen={setViewModalStatus}
        notice={selectedNotice}
      />

      <AddNotice
        isOpen={editModalStatus}
        setIsOpen={setEditModalStatus}
        onAddNotice={(newNotice) => {
          if (selectedNotice) {
            setNotices((prev) =>
              prev.map((notice) => (notice.id === selectedNotice.id ? { ...notice, ...newNotice } : notice))
            );
          } else {
            setNotices((prev) => [...prev, { ...newNotice, id: Date.now() }]);
          }
        }}
        selectedNotice={selectedNotice}
      />
    </PageWrapper>
  );
};

export default noticeBoard;
