import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Button from '../../../components/bootstrap/Button';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import PaginationButtons from '../../../components/PaginationButtons';

type Task = {
    code: string;
    timer: string;
    task: string;
    completedOn: string;
    milestone: string;
    startDate: string;
    dueDate: string;
    assignedTo: string;
    status: string;
    hoursLogged: string;
};

const ViewProjectRoadMapPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const project = location.state?.project;

    if (!project) {
        return (
            <PageWrapper title="Project Overview">
                <Page>
                    <div className="text-center mt-5">
                        <h4>Project not found.</h4>
                        <Button color="primary" onClick={() => navigate(-1)}>Go Back</Button>
                    </div>
                </Page>
            </PageWrapper>
        );
    }

    // Dummy members and tasks for illustration
    const members = [
        { name: 'Mina syam', assigned: 0, completed: 0, late: 0, hours: 0 },
        { name: 'Mr john', assigned: 0, completed: 0, late: 0, hours: 0 },
        { name: 'risha', assigned: 0, completed: 0, late: 0, hours: 0 },
        { name: 'TANUSHREE WAGHMARE', assigned: 0, completed: 0, late: 0, hours: 0 },
    ];

    const hoursData = {
      planned: [2, 3, 4, 3, 5, 4, 2],
      actual: [1, 2, 3, 2, 4, 3, 1],
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    };

    const hoursSeries = [
      { name: "Planned", data: hoursData.planned },
      { name: "Actual", data: hoursData.actual },
    ];

    const hoursOptions: ApexOptions = {
      chart: { type: "bar", stacked: false },
      plotOptions: { bar: { horizontal: false, borderRadius: 4, columnWidth: "40%" } },
      dataLabels: { enabled: false },
      xaxis: { categories: hoursData.categories },
      colors: ["#0074B7", "#BFD7ED"],
      legend: { position: "top" },
    };

    // Dummy tasks data for illustration
    interface AllTask {
        code: string;
        timer: string;
        task: string;
        completedOn: string;
        milestone: string;
        startDate: string;
        dueDate: string;
        assignedTo: string;
        status: string;
        hoursLogged: string;
    }

    const allTasks: AllTask[] = [
    ];
    
    const paginatedTasks: AllTask[] = allTasks.slice((currentPage - 1) * perPage, currentPage * perPage);

    return (
        <PageWrapper title={project.projectName}>
            <Page>
                {/* --- TOP SECTION: Overview and Statistics --- */}
                <div className="row mb-3">
                    <div className="col-lg-8 mb-3">
                        <div className="card h-100">
                            <div className="card-header fw-bold fs-5">Overview</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="mb-2 d-flex">
                                            <div className="fw-bold text-muted" style={{ minWidth: 140 }}>Project Name</div>
                                            <div>{project.projectName || 'N/A'}</div>
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <div className="fw-bold text-muted" style={{ minWidth: 140 }}>Client</div>
                                            <div>
                                                <img
                                                    src={project.clientAvatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                                                    alt="client"
                                                    width={28}
                                                    height={28}
                                                    style={{ borderRadius: '50%', marginRight: 8, verticalAlign: 'middle' }}
                                                />
                                                <span className="fw-bold">{project.client || 'N/A'}</span>
                                                {project.clientEmail && (
                                                  <div className="text-muted" style={{ fontSize: 13 }}>{project.clientEmail}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <div className="fw-bold text-muted" style={{ minWidth: 140 }}>Status</div>
                                            <div>
                                                <span style={{ color: '#fbc02d', fontWeight: 600, fontSize: 18, verticalAlign: 'middle' }}>●</span>
                                                <span className="ms-2">{project.status || 'N/A'}</span>
                                            </div>
                                        </div>
                                        <div className="mb-2 d-flex">
                                            <div className="fw-bold text-muted" style={{ minWidth: 140 }}>Start Date</div>
                                            <div>{project.startDate || 'N/A'}</div>
                                        </div>
                                        <div className="mb-2 d-flex">
                                            <div className="fw-bold text-muted" style={{ minWidth: 140 }}>Deadline</div>
                                            <div>{project.deadline || 'N/A'}</div>
                                        </div>
                                        <div className="mb-2 d-flex">
                                            <div className="fw-bold text-muted" style={{ minWidth: 140 }}>Project Members</div>
                                            <div>{project.members || 'N/A'}</div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-end">
                                        <div className="fw-bold">Project Progress</div>
                                        <div className="text-muted mt-2">
                                          {project.progress !== undefined ? `${project.progress}% Progress` : '0% Progress'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <div className="card h-100">
                            <div className="card-header fw-bold">Statistics by Milestone Status</div>
                            <div className="card-body d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 120 }}>
                                <div className="text-muted mt-2">- Not enough data -</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-lg-4 mb-3">
                        <div className="card h-100">
                            <div className="card-header fw-bold">Statistics by Task Status</div>
                            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                <div className="text-muted mt-2">- Not enough data -</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <div className="card h-100">
                            <div className="card-header fw-bold">Statistics by Hours Estimation</div>
                            <div className="card-body d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 220 }}>
                                <ReactApexChart
                                  options={hoursOptions}
                                  series={hoursSeries}
                                  type="bar"
                                  height={200}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <div className="card h-100">
                            <div className="card-header fw-bold">Statistics by Task Priority</div>
                            <div className="card-body d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 120 }}>
                                <div className="text-muted mt-2">- Not enough data -</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Members and Milestones Section */}
                <div className="row mb-3 align-items-stretch">
                  <div className="col-8 d-flex">
                    <div className="card mb-3 h-100 w-100">
                      <div className="card-body">
                        <h6 className="card-title">Members</h6>
                        <table className="table table-bordered table-sm">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Assigned</th>
                              <th>Completed</th>
                              <th>Late</th>
                              <th>Hours Logged</th>
                            </tr>
                          </thead>
                          <tbody>
                            {members.map((m, i) => (
                              <tr key={i}>
                                <td>{m.name}</td>
                                <td>{m.assigned}</td>
                                <td>{m.completed}</td>
                                <td>{m.late}</td>
                                <td>{m.hours}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 d-flex">
                    <div className="card mb-3 h-100 w-100">
                      <div className="card-body">
                        <h6 className="card-title">Milestones</h6>
                        <table className="table table-bordered table-sm">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Milestone Title</th>
                              <th>Status</th>
                              <th>Start Date</th>
                              <th>End Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan={5} className="text-center text-muted">- No record found. -</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tasks Section */}
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h6 className="card-title mb-0">Tasks</h6>
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
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-3">
                                <select className="form-select form-select-sm">
                                    <option>Hide completed task</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-select form-select-sm">
                                    <option>All</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-select form-select-sm">
                                    <option>All</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <input className="form-control form-control-sm" placeholder="Start typing to search" />
                            </div>
                        </div>
                        <table className="table table-bordered table-sm">
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Timer</th>
                                    <th>Task</th>
                                    <th>Completed On</th>
                                    <th>Milestones</th>
                                    <th>Start Date</th>
                                    <th>Due Date</th>
                                    <th>Assigned To</th>
                                    <th>Status</th>
                                    <th>Hours Logged</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedTasks.length > 0 ? (
                                    paginatedTasks.map((task: Task, idx: number) => (
                                        <tr key={idx}>
                                            <td>{task.code}</td>
                                            <td>{task.timer}</td>
                                            <td>{task.task}</td>
                                            <td>{task.completedOn}</td>
                                            <td>{task.milestone}</td>
                                            <td>{task.startDate}</td>
                                            <td>{task.dueDate}</td>
                                            <td>{task.assignedTo}</td>
                                            <td>{task.status}</td>
                                            <td>{task.hoursLogged}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={10} className="text-center text-muted">No data available in table</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {/* Pagination */}
                        <PaginationButtons
                            data={allTasks as Task[]}
                            label='items'
                            setCurrentPage={setCurrentPage as React.Dispatch<React.SetStateAction<number>>}
                            currentPage={currentPage}
                            perPage={perPage}
                            setPerPage={setPerPage as React.Dispatch<React.SetStateAction<number>>}
                        />
                    </div>
                </div>
            </Page>
        </PageWrapper>
    );
};

export default ViewProjectRoadMapPage;