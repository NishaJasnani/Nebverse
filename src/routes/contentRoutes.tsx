import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import {
	componentPagesMenu,
	dashboardPagesMenu,
	demoPagesMenu,
	gettingStartedPagesMenu,
	pageLayoutTypesPagesMenu,
} from '../menu';
import Login from '../pages/presentation/auth/Login';
import ContractTemplate from '../pages/presentation/contract/ContractTemplate';
import ProjectTemplate from '../pages/presentation/project/ProjectTemplate';
import { ProjectsProvider } from '../pages/presentation/project/ProjectsContext';
import RecurringInvoice from '../pages/presentation/invoices/RecurringInvoice';
import { TemplateProvider } from '../pages/presentation/genrate/TemplateContext';
import RecurringExpense from '../pages/presentation/expenses/RecurringExpense';
import CustomerViewPage from '../pages/presentation/client/CustomerViewPage';
import JobView from '../pages/presentation/jobs/JobView';
import LeadViewPage from '../pages/presentation/lead/LeadViewPage';
import ContractViewPage from '../pages/presentation/contract/ContractViewPage';
import DealViewPage from '../pages/presentation/deals/DealViewPage'; // adjust path as needed
import ViewEmployeePage from '../pages/presentation/hr/ViewEmployeePage';
import ProjectViewPage from '../pages/presentation/project/ProjectViewPage';
import {ProjectDataProvider} from '../pages/presentation/project/ProjectDataContext';
import ViewPageWrapper from '../pages/presentation/project/ViewPageWrapper';
import ViewProjectRoadMapPage from '../pages/presentation/project/ViewProjectRoadMapPage';

// import EmloyeeViewPage from '../pages/presentation/hr/EmployeeViewPage';

// import TaskManagementPage from '../pages/presentation/task/TaskMangmentPage';


// import Task from '../pages/presentation/task/Task';

const LANDING = {
	DASHBOARD: lazy(() => import('../pages/presentation/dashboard/DashboardPage')),
	SUMMARY: lazy(() => import('../pages/presentation/SummaryPage')),
	HR: lazy(() => import('../pages/presentation/hr/Employees')),
	// PRIVATEDASHBOARD: lazy(() => import('../pages/presentation/dashboard/DashboardBookingPage')),
	ADVANCEDDASHBOARD: lazy(() => import('../pages/presentation/dashboard/DashboardPage')),
	DESIGNATION: lazy(() => import('../pages/presentation/designation/DesignatonPage')),
};
const PAYROLL = {
	EmployeeSalary: lazy(() => import('../pages/presentation/payroll/employeeSalary')),
	PayrollExpenses: lazy(() => import('../pages/presentation/payroll/PayrollExpenses')),
	Payroll: lazy(() => import('../pages/presentation/payroll/Payroll')),
	OvertimeRequest: lazy(() => import('../pages/presentation/payroll/overtimeRequest')),
	Reports: lazy(() => import('../pages/presentation/payroll/reports')),
};

const FINANCE = {
	BankAccount: lazy(() => import('../pages/presentation/Finance/BankAccount')),
	EINvoice: lazy(() => import('../pages/presentation/Finance/EInvoice')),
	CreditNote: lazy(() => import('../pages/presentation/Finance/CreditNote')),
	PROPOSAL: lazy(() => import('../pages/presentation/proposal/Proposal')),
	ProposalTemplate: lazy(() => import('../pages/presentation/proposal/ProposalTemplate')),
	INVOICES: lazy(() => import('../pages/presentation/invoices/Invoices')),
	EXPENSES: lazy(() => import('../pages/presentation/expenses/Expenses')),
	RECURRINGEXPENSES: lazy(() => import('../pages/presentation/expenses/RecurringExpense')),
	ESTIMATES: lazy(() => import('../pages/presentation/Finance/Estimates')),
	PAYMENT: lazy(() => import('../pages/presentation/payment/Payment'))
};
const NOTICEBOARD = {
	NoticeBoard: lazy(() => import('../pages/presentation/NoticeBoard/NoticeBoard')),

};
const ORDER={
	ORDER: lazy(() => import('../pages/presentation/orders/Order')),
};
const EVENT={
	EVENT: lazy(()=> import('../pages/presentation/event/Event')),
};
const SINGLE = {
	BOXED: lazy(() => import('../pages/presentation/single-pages/SingleBoxedPage')),
	FLUID: lazy(() => import('../pages/presentation/single-pages/SingleFluidPage')),

};
const LIST = {
	BOXED: lazy(() => import('../pages/presentation/demo-pages/ListBoxedPage')),
	FLUID: lazy(() => import('../pages/presentation/demo-pages/ListFluidPage')),
};
const GRID = {
	BOXED: lazy(() => import('../pages/presentation/demo-pages/GridBoxedPage')),
	FLUID: lazy(() => import('../pages/presentation/demo-pages/GridFluidPage')),
};
const EDIT = {
	MODERN: lazy(() => import('../pages/presentation/demo-pages/EditModernPage')),
	BOXED: lazy(() => import('../pages/presentation/demo-pages/EditBoxedPage')),
	FLUID: lazy(() => import('../pages/presentation/demo-pages/EditFluidPage')),
	WIZARD: lazy(() => import('../pages/presentation/demo-pages/EditWizardPage')),
	IN_CANVAS: lazy(() => import('../pages/presentation/demo-pages/EditInCanvasPage')),
	IN_MODAL: lazy(() => import('../pages/presentation/demo-pages/EditInModalPage')),
};
const PRICING = {
	PRICING_TABLE: lazy(() => import('../pages/presentation/pricing/PricingTablePage')),
};

const AUTH = {
	PAGE_404: lazy(() => import('../pages/presentation/auth/Page404')),
};
const APP = {
	PROJECT_MANAGEMENT: {
		PROJECTS_LIST: lazy(
			() => import('../pages/presentation/project-management/ProjectManagementsList'),
		),
		PROJECT: lazy(
			() => import('../pages/presentation/project-management/ProjectManagementsProject'),
		),
	},
	KNOWLEDGE: {
		GRID: lazy(() => import('../pages/presentation/knowledge/KnowledgeGridPage')),
		VIEW: lazy(() => import('../pages/presentation/knowledge/KnowledgeViewPage')),
	},
	SALES: {
		TRANSACTIONS: lazy(() => import('../pages/presentation/sales/TransActionsPage')),
		PRODUCTS: lazy(() => import('../pages/presentation/sales/SalesListPage')),
		PRODUCTS_GRID: lazy(() => import('../pages/presentation/sales/ProductsGridPage')),
		PRODUCTS_VIEW: lazy(() => import('../pages/presentation/sales/ProductViewPage')),
	},
	APPOINTMENT: {
		//	CALENDAR: lazy(() => import('../pages/presentation/appointment/CalendarPage')),
		EMPLOYEE_LIST: lazy(() => import('../pages/presentation/appointment/EmployeeList')),
		EMPLOYEE_VIEW: lazy(() => import('../pages/presentation/appointment/EmployeePage')),
		APPOINTMENT_LIST: lazy(() => import('../pages/presentation/appointment/AppointmentList')),
	},
	CRM: {
		CRM_DASHBOARD: lazy(() => import('../pages/presentation/crm/CrmDashboard')),
		CUSTOMERS: lazy(() => import('../pages/presentation/crm/CustomersList')),
		CUSTOMER: lazy(() => import('../pages/presentation/crm/Customer')),
		 // ...other CRM routes...
  TICKET_PREVIEW: lazy(() => import('../pages/presentation/crm/TicketPreviewPage')),

		
	},
	CHAT: {
		WITH_LIST: lazy(() => import('../pages/presentation/chat/WithListChatPage')),
		ONLY_LIST: lazy(() => import('../pages/presentation/chat/OnlyListChatPage')),
	},
	HR: {
		DESIGNATION: lazy(() => import('../pages/presentation/designation/DesignatonPage')),
		EMPLOYEES: lazy(() => import('../pages/presentation/hr/Employees')),
		DEPARTMENT: lazy(() => import('../pages/presentation/department/Department')),
		APPRECIATION: lazy(() => import('../pages/presentation/appreciation/Appreciation')),
		SHIFTROASTER: lazy(() => import('../pages/presentation/shiftRoaster/ShiftRoaster')),
		LEAVES: lazy(() => import('../pages/presentation/leaves/Leaves')),
		HOLIDAY: lazy(() => import('../pages/presentation/holiday/Holiday')),
		ATTENDANCE: lazy(() => import('../pages/presentation/attendance/Attendance'))
	},
	WORK:{
		PROJECT: lazy(() => import('../pages/presentation/project/ProjectPage')),
		// PROJECT_VIEW: lazy(()=> import('../pages/presentation/project/ProjectViewPage')),		
		TIMESHEET: lazy(() => import('../pages/presentation/timesheet/TimeSheet')),
		CONTRACT: lazy(() => import('../pages/presentation/contract/Contract')),
		PROJECTROADMAP: lazy(()=>import('../pages/presentation/project/ProjectRoad')),
        // TASKPAGE : lazy(()=>import('../pages/presentation/task/CommanUpcomingEvents')),
		// TASKMANGMENTPAGE: lazy(()=>import('../pages/presentation/task/TaskMangmentPage')),
		// CALENDER: lazy(()=>import('../pages/presentation/task/CalenderPage')),
		
	},
	LEAD:{
		LEAD_CONTACTS: lazy(()=> import('../pages/presentation/lead/Lead')),
		DEALS: lazy(()=> import('../pages/presentation/deals/Deals')),
		
	},
	CLIENT:{
		CLIENT : lazy(()=>import('../pages/presentation/client/ClientPage')),
		CLIENT_VIEW: lazy(()=>import('../pages/presentation/client/CustomerViewPage')),
	},
    PURCHASE:{
		PRODUCTS: lazy(() => import('../pages/presentation/products/Products')),
		VENDOR_CREDIT: lazy(()=>import('../pages/presentation/vendorcredit/VendorCredit')),
		INVENTORY: lazy(()=>import('../pages/presentation/inventory/Inventory')),
		VENDOR: lazy(()=>import('../pages/presentation/vendor/VendorPage')),
		VENDORDETAILSPAGE: lazy(()=>import('../pages/presentation/vendor/VendorDetailsPage')),
		BILLS : lazy(()=>import('../pages/presentation/bills/BillsPage'))
	},
	RECRUIT:{
		SKILLS: lazy(()=> import('../pages/presentation/skills/SkillsPage')),
		REPORTS: lazy(()=> import('../pages/presentation/reports/ReportPage')),
		JOBS : lazy(()=>import('../pages/presentation/jobs/JobPage')),
		OFFERLETTER:lazy(()=>import('../pages/presentation/offerletter/OfferLetter'))
		// INTERVIEWSCHEDULE: lazy(()=>import('../pages/presentation/interviewSchedule/InterviewSchedule'))
	},

	LETTER:{
		GENERATE: lazy(()=>import('../pages/presentation/genrate/GenratePage')),
		TEMPLATE: lazy(()=>import('../pages/presentation/template/Template'))
	},
   MESSAGE:{
	MESSAGE: lazy(()=>import('../pages/presentation/message/ChatMessage')),
   },
   KNOWLEDGEBASE:{
	KNOWLEDGEBASE: lazy(()=>import('../pages/presentation/knowledgeBase/KnowledgeBasePage'))
   },
   ASSETS:{
	ASSETS: lazy(()=>import('../pages/presentation/assets/Assets'))
   },
   QRCODE:{
	QRCODE: lazy(()=>import('../pages/presentation/qr/QrPage'))
   },
   TICKET:{
       TICKET: lazy(()=>import('../pages/presentation/ticket/TicketPage')),
	//    TICKETPREVIEWPAGE: lazy(()=>import('../pages/presentation/ticket/TicketPreviewForm'))
   },
};
const PAGE_LAYOUTS = {
	HEADER_SUBHEADER: lazy(() => import('../pages/presentation/page-layouts/HeaderAndSubheader')),
	HEADER: lazy(() => import('../pages/presentation/page-layouts/OnlyHeader')),
	SUBHEADER: lazy(() => import('../pages/presentation/page-layouts/OnlySubheader')),
	CONTENT: lazy(() => import('../pages/presentation/page-layouts/OnlyContent')),
	BLANK: lazy(() => import('../pages/presentation/page-layouts/Blank')),
	ASIDE: lazy(() => import('../pages/presentation/aside-types/DefaultAsidePage')),
	MINIMIZE_ASIDE: lazy(() => import('../pages/presentation/aside-types/MinimizeAsidePage')),
};

const CONTENT = {
	CONTENTS: lazy(() => import('../pages/documentation/content/ContentListPage')),
	TYPOGRAPHY: lazy(() => import('../pages/documentation/content/TypographyPage')),
	IMAGES: lazy(() => import('../pages/documentation/content/ImagesPage')),
	TABLES: lazy(() => import('../pages/documentation/content/TablesPage')),
	FIGURES: lazy(() => import('../pages/documentation/content/FiguresPage')),
};
const FORMS_PAGE = {
	FORMS: lazy(() => import('../pages/documentation/forms/FormsListPage')),
	FORM_GROUP: lazy(() => import('../pages/documentation/forms/FormGroupPage')),
	FORM_CONTROLS: lazy(() => import('../pages/documentation/forms/FormControlsPage')),
	SELECT: lazy(() => import('../pages/documentation/forms/SelectPage')),
	CHECKS_AND_RADIO: lazy(() => import('../pages/documentation/forms/ChecksAndRadioPage')),
	RANGE: lazy(() => import('../pages/documentation/forms/RangePage')),
	INPUT_GROUP: lazy(() => import('../pages/documentation/forms/InputGroupPage')),
	VALIDATION: lazy(() => import('../pages/documentation/forms/ValidationPage')),
	WIZARD: lazy(() => import('../pages/documentation/forms/WizardPage')),
};
const GETTING_STARTED = {
	INSTALLATION: lazy(() => import('../pages/documentation/getting-started/InstallationPage')),
	DEVELOPMENT: lazy(() => import('../pages/documentation/getting-started/DevelopmentPage')),
	FOLDER: lazy(() => import('../pages/documentation/getting-started/FolderStructurePage')),
	BOOTSTRAP: lazy(() => import('../pages/documentation/getting-started/BootstrapVariablesPage')),
	PROJECT: lazy(() => import('../pages/documentation/getting-started/ProjectStructurePage')),
};
const ROUTES = {
	ROUTER: lazy(() => import('../pages/documentation/routes/RouterPage')),
};
const COMPONENTS_PAGE = {
	COMPONENTS: lazy(() => import('../pages/documentation/components/ComponentsListPage')),
	ACCORDION: lazy(() => import('../pages/documentation/components/AccordionPage')),
	ALERT: lazy(() => import('../pages/documentation/components/AlertPage')),
	BADGE: lazy(() => import('../pages/documentation/components/BadgePage')),
	BREADCRUMB: lazy(() => import('../pages/documentation/components/BreadcrumbPage')),
	BUTTON: lazy(() => import('../pages/documentation/components/ButtonPage')),
	BUTTON_GROUP: lazy(() => import('../pages/documentation/components/ButtonGroupPage')),
	CARD: lazy(() => import('../pages/documentation/components/CardPage')),
	CAROUSEL: lazy(() => import('../pages/documentation/components/CarouselPage')),
	COLLAPSE: lazy(() => import('../pages/documentation/components/CollapsePage')),
	DROPDOWN: lazy(() => import('../pages/documentation/components/DropdownsPage')),
	LIST_GROUP: lazy(() => import('../pages/documentation/components/ListGroupPage')),
	MODAL: lazy(() => import('../pages/documentation/components/ModalPage')),
	NAVS_TABS: lazy(() => import('../pages/documentation/components/NavsTabsPage')),
	OFF_CANVAS: lazy(() => import('../pages/documentation/components/OffCanvasPage')),
	PAGINATION: lazy(() => import('../pages/documentation/components/PaginationPage')),
	POPOVERS: lazy(() => import('../pages/documentation/components/PopoversPage')),
	PROGRESS: lazy(() => import('../pages/documentation/components/ProgressPage')),
	SCROLLSPY: lazy(() => import('../pages/documentation/components/ScrollspyPage')),
	SPINNER: lazy(() => import('../pages/documentation/components/SpinnersPage')),
	TABLE: lazy(() => import('../pages/documentation/components/TablePage')),
	TOASTS: lazy(() => import('../pages/documentation/components/ToastsPage')),
	TOOLTIP: lazy(() => import('../pages/documentation/components/TooltipPage')),
};
const UTILITIES = {
	UTILITIES: lazy(() => import('../pages/documentation/utilities/UtilitiesListPage')),
	API: lazy(() => import('../pages/documentation/utilities/ApiPage')),
	BACKGROUND: lazy(() => import('../pages/documentation/utilities/BackgroundPage')),
	BORDERS: lazy(() => import('../pages/documentation/utilities/BordersPage')),
	COLORS: lazy(() => import('../pages/documentation/utilities/ColorsPage')),
	DISPLAY: lazy(() => import('../pages/documentation/utilities/DisplayPage')),
	FLEX: lazy(() => import('../pages/documentation/utilities/FlexPage')),
	FLOAT: lazy(() => import('../pages/documentation/utilities/FloatPage')),
	INTERACTIONS: lazy(() => import('../pages/documentation/utilities/InteractionsPage')),
	OVERFLOW: lazy(() => import('../pages/documentation/utilities/OverflowPage')),
	POSITION: lazy(() => import('../pages/documentation/utilities/PositionPage')),
	SHADOWS: lazy(() => import('../pages/documentation/utilities/ShadowsPage')),
	SIZING: lazy(() => import('../pages/documentation/utilities/SizingPage')),
	SPACING: lazy(() => import('../pages/documentation/utilities/SpacingPage')),
	TEXT: lazy(() => import('../pages/documentation/utilities/TextPage')),
	VERTICAL_ALIGN: lazy(() => import('../pages/documentation/utilities/VerticalAlignPage')),
	VISIBILITY: lazy(() => import('../pages/documentation/utilities/VisibilityPage')),
};
const ICONS = {
	ICONS_LIST: lazy(() => import('../pages/documentation/icons/IconsListPage')),
	ICON: lazy(() => import('../pages/documentation/icons/IconPage')),
	MATERIAL: lazy(() => import('../pages/documentation/icons/MaterialPage')),
};
const CHARTS_PAGE = {
	CHART_LIST: lazy(() => import('../pages/documentation/charts/ChartsListPage')),
	GENERAL_USAGE: lazy(() => import('../pages/documentation/charts/ChartGeneralUsagePage')),
	SPARKLINE: lazy(() => import('../pages/documentation/charts/ChartSparklinePage')),
	LINE: lazy(() => import('../pages/documentation/charts/ChartLinePage')),
	AREA: lazy(() => import('../pages/documentation/charts/ChartAreaPage')),
	COLUMN: lazy(() => import('../pages/documentation/charts/ChartColumnPage')),
	BAR: lazy(() => import('../pages/documentation/charts/ChartBarPage')),
	MIXED: lazy(() => import('../pages/documentation/charts/ChartMixedPage')),
	TIMELINE: lazy(() => import('../pages/documentation/charts/ChartTimelinePage')),
	CANDLESTICK: lazy(() => import('../pages/documentation/charts/ChartCandlestickPage')),
	BOX_WHISKER: lazy(() => import('../pages/documentation/charts/ChartBoxWhiskerPage')),
	PIE_DONUT: lazy(() => import('../pages/documentation/charts/ChartPieDonutPage')),
	RADAR: lazy(() => import('../pages/documentation/charts/ChartRadarPage')),
	POLAR: lazy(() => import('../pages/documentation/charts/ChartPolarPage')),
	RADIAL_BAR: lazy(() => import('../pages/documentation/charts/ChartRadialBarPage')),
	BUBBLE: lazy(() => import('../pages/documentation/charts/ChartBubblePage')),
	SCATTER: lazy(() => import('../pages/documentation/charts/ChartScatterPage')),
	HEAT_MAP: lazy(() => import('../pages/documentation/charts/ChartHeatMapPage')),
	TREE_MAP: lazy(() => import('../pages/documentation/charts/ChartTreeMapPage')),
};
const EXTRA = {
	NOTIFICATION: lazy(() => import('../pages/documentation/extras/NotificationPage')),
	HOOKS: lazy(() => import('../pages/documentation/extras/HooksPage')),
};

const presentation: RouteProps[] = [
	/**
	 * Landing
	 */

	{
		path: dashboardPagesMenu.dashboard.path,
		element: <LANDING.DASHBOARD />,
	},

	{
		path: dashboardPagesMenu.hr.path,
		element: <LANDING.HR />,
	},

	
	{
		path: dashboardPagesMenu.dashboard.path,
		element: <LANDING.ADVANCEDDASHBOARD />,
	},
	{
		path: dashboardPagesMenu.hr.subMenu.employees.path,
		element: <APP.HR.EMPLOYEES />,
	},
	{
		path:'/employees/view/:id',
		element:<ViewEmployeePage/>
	},
	{
		path: dashboardPagesMenu.hr.subMenu.designation.path,
		element: <APP.HR.DESIGNATION />,
	},
	{
		path: dashboardPagesMenu.hr.subMenu.department.path,
		element: <APP.HR.DEPARTMENT />,
	},
	{
		path: dashboardPagesMenu.hr.subMenu.appreciation.path,
		element: <APP.HR.APPRECIATION />,
	},
	{
		path: dashboardPagesMenu.hr.subMenu.shiftroaster.path,
		element: <APP.HR.SHIFTROASTER />,
	},
	{
		path: dashboardPagesMenu.hr.subMenu.leaves.path,
		element: <APP.HR.LEAVES />,
	},
	{
		path: dashboardPagesMenu.hr.subMenu.holiday.path,
		element: <APP.HR.HOLIDAY />,
	},
	{
		path: dashboardPagesMenu.hr.subMenu.attendance.path,
		element: <APP.HR.ATTENDANCE />,
	},
	/** ************************************************** */

	/**
	 * Payroll
	 */
	{
		path: dashboardPagesMenu.Payroll.subMenu.EmployeeSalary.path,
		element: <PAYROLL.EmployeeSalary />,
	},
	{
		path: dashboardPagesMenu.Payroll.subMenu.PayrollExpenses.path,
		element: <PAYROLL.PayrollExpenses />,
	},
	{
		path: dashboardPagesMenu.Payroll.subMenu.Payroll.path,
		element: <PAYROLL.Payroll />,
	},
	{
		path: dashboardPagesMenu.Payroll.subMenu.OvertimeRequest.path,
		element: <PAYROLL.OvertimeRequest />,
	},
	{
		path: dashboardPagesMenu.Payroll.subMenu.Reports.path,
		element: <PAYROLL.Reports />,
	},

	/**
	 * Finance
	 */
	{
		path: dashboardPagesMenu.Finance.subMenu.BankAccount.path,
		element: <FINANCE.BankAccount />,
	},
	{
		path: dashboardPagesMenu.Finance.subMenu.EInvoice.path,
		element: <FINANCE.EINvoice />,
	},
	{
		path: dashboardPagesMenu.Finance.subMenu.CreditNote.path,
		element: <FINANCE.CreditNote />,
	},
	{
		path: dashboardPagesMenu.Finance.subMenu.Proposal.path,
		element: <FINANCE.PROPOSAL />,
	},
	{
		path: 'Proposal-Template',
		element: <FINANCE.ProposalTemplate />,
	},
	{
		path: dashboardPagesMenu.Finance.subMenu.Invoices.path,
		element: <FINANCE.INVOICES />,
	},
	{
		path: dashboardPagesMenu.Finance.subMenu.Expenses.path,
		element: <FINANCE.EXPENSES />,
	},
	{
       path:'/recurring-expenses',
	   element:<RecurringExpense/>
	},
	{
		path: '/recurring-invoice',
		element: <RecurringInvoice/>
	},
	{
		path: dashboardPagesMenu.Finance.subMenu.Estimates.path,
		element: <FINANCE.ESTIMATES />,
	},
	{
		path: dashboardPagesMenu.Finance.subMenu.Payments.path,
		element: <FINANCE.PAYMENT />,
	},
// LEADS
{
	path: dashboardPagesMenu.leads.subMenu.leadContact.path,
	element: <APP.LEAD.LEAD_CONTACTS />,
},
{
  path : 'leads/view/:email',
  element:<LeadViewPage />
},
{
   path: dashboardPagesMenu.leads.subMenu.deals.path,
   element: <APP.LEAD.DEALS />,
},
{
  path:'/deals/view',
  element:<DealViewPage />
},

// WORK

	{
		path: dashboardPagesMenu.Work.subMenu.Timesheet.path,
		element: <APP.WORK.TIMESHEET />,
	},
	{
  path: dashboardPagesMenu.Work.subMenu.Project.path,
  element: (
    <ProjectsProvider>
      <APP.WORK.PROJECT />
    </ProjectsProvider>
  ),
},
	{
  path: '/project-template',
  element: (
    <ProjectDataProvider>
      <ProjectTemplate />
    </ProjectDataProvider>
  ),
},
{
  path: '/project-template/view/:projectName',
  element: (
    <ProjectDataProvider>
      <ViewPageWrapper />
    </ProjectDataProvider>
  ),
},
	// {
    //   path: dashboardPagesMenu.Work.subMenu.Task.path,
	//   element: <APP.WORK.TASKPAGE/>
	// },
	{
          path: '/projects/view',
          element:<ProjectViewPage/>,
	},
	
	{
		path: dashboardPagesMenu.Work.subMenu.Contract.path,
		element: <APP.WORK.CONTRACT />,
	},
	// {
    //    path:'/calendar',
	//    element:<APP.WORK.CALENDER/>
	// },
	{
		path: '/contract-template',
		element: <ContractTemplate />, // Replace with the actual component
	},
	{
		path: dashboardPagesMenu.Work.subMenu.ProjectRoadmap.path,
		element: <ProjectsProvider>
			<APP.WORK.PROJECTROADMAP/>
		</ProjectsProvider>
	},
	{
		path:'/project-roadmap/view/:code',
		element:<ViewProjectRoadMapPage/>
	},
{
        path: '/contract/view',
		element: <ContractViewPage />
},

	//TICKET PAGE
	{
      path:dashboardPagesMenu.Ticket.path,
	  element:<APP.TICKET.TICKET/>
	},
	// {
    //   path:'app/ticket/TicketPreviewForm',
	//   element:<APP.TICKET.TICKETPREVIEWPAGE/>
	// },

{
  path: '/crm/ticket-preview', // or any path you want
  element: <APP.CRM.TICKET_PREVIEW />,
},

	// Purchase

    {
		path: dashboardPagesMenu.Purchase.subMenu.Products.path,
		element: <APP.PURCHASE.PRODUCTS />,
	},
    {
		path: dashboardPagesMenu.Purchase.subMenu.Vendor_Credits.path,
		element:<APP.PURCHASE.VENDOR_CREDIT/>
	},
    {
        path:dashboardPagesMenu.Purchase.subMenu.Inventory.path,
		element:<APP.PURCHASE.INVENTORY/>
    },
	{
		path: dashboardPagesMenu.Purchase.subMenu.Vendor.path,
		element:<APP.PURCHASE.VENDOR/>
	},
	{
        path: '/vendor-details',
		element:<APP.PURCHASE.VENDORDETAILSPAGE/>
	},
	{
      path: dashboardPagesMenu.Purchase.subMenu.Bills.path,
	  element:<APP.PURCHASE.BILLS/>
	},
    {
        path: dashboardPagesMenu.Letter.subMenu.Generate.path,
		element:<TemplateProvider>
			<APP.LETTER.GENERATE/>
		</TemplateProvider>
	},
	{
       path: dashboardPagesMenu.Letter.subMenu.Template.path,
	   element:<TemplateProvider>
		<APP.LETTER.TEMPLATE/>
	   </TemplateProvider>
	},
	
	//RECRUIT
	{
      path:dashboardPagesMenu.Recruit.subMenu.Skills.path,
	  element:<APP.RECRUIT.SKILLS/>
	},
	{
		path: dashboardPagesMenu.Recruit.subMenu.Reports.path,
		element:<APP.RECRUIT.REPORTS/>
	},
	{
		path: dashboardPagesMenu.Recruit.subMenu.Jobs.path,
		element:<APP.RECRUIT.JOBS/>
	},
	{
        path:'/jobs/view/:id',
		element:<JobView/>
	},
	{
       path: dashboardPagesMenu.Recruit.subMenu.OfferLetters.path,
	   element:<APP.RECRUIT.OFFERLETTER/>
	},
	// {
    //      path:dashboardPagesMenu.Recruit.subMenu.InterviewSchedule.path,
	// 	 element:<APP.RECRUIT.INTERVIEWSCHEDULE/>
	// },

	// MESSAGE
	{
		path: dashboardPagesMenu.message.path,
		element:<APP.MESSAGE.MESSAGE />
	
	},
	// KONWLEDGEBASE
	{
		path: dashboardPagesMenu.KnowledgeBase.path,
		element:<APP.KNOWLEDGEBASE.KNOWLEDGEBASE />
	},


	//ASSETS
	{
		path: dashboardPagesMenu.Assets.path,
		element:<APP.ASSETS.ASSETS/>
	},
    //QR CODE
	{
        path:dashboardPagesMenu.QrCode.path,
		element:<APP.QRCODE.QRCODE/>
	},

//CLIENT
{
	path: dashboardPagesMenu.Client.path,
	element:<APP.CLIENT.CLIENT/>
},
{
   path: '/clients/view/:email',
   element:<CustomerViewPage />
},
	/**
	 * 
	 * NoticeBoard
	 */
	{
		path: dashboardPagesMenu.Noticeboard.path,
		element: <NOTICEBOARD.NoticeBoard />,

	},
	{
		path: dashboardPagesMenu.Order.path,
		element: <ORDER.ORDER />,
	},
	{
		path: dashboardPagesMenu.Event.path,
		element: <EVENT.EVENT/>
	},

	/**
	 * Single Pages
	 */
	{
		path: demoPagesMenu.singlePages.subMenu.boxedSingle.path,
		element: <SINGLE.BOXED />,
	},
	{
		path: demoPagesMenu.singlePages.subMenu.fluidSingle.path,
		element: <SINGLE.FLUID />,
	},

	/**
	 * List
	 */
	{
		path: demoPagesMenu.listPages.subMenu.listBoxed.path,
		element: <LIST.BOXED />,
	},
	{
		path: demoPagesMenu.listPages.subMenu.listFluid.path,
		element: <LIST.FLUID />,
	},

	/**
	 * Grid
	 */
	{
		path: demoPagesMenu.gridPages.subMenu.gridBoxed.path,
		element: <GRID.BOXED />,
	},
	{
		path: demoPagesMenu.gridPages.subMenu.gridFluid.path,
		element: <GRID.FLUID />,
	},

	/**
	 * Edit
	 */
	{
		path: demoPagesMenu.editPages.subMenu.editModern.path,
		element: <EDIT.MODERN />,
	},
	{
		path: demoPagesMenu.editPages.subMenu.editBoxed.path,
		element: <EDIT.BOXED />,
	},
	{
		path: demoPagesMenu.editPages.subMenu.editFluid.path,
		element: <EDIT.FLUID />,
	},
	{
		path: demoPagesMenu.editPages.subMenu.editWizard.path,
		element: <EDIT.WIZARD />,
	},
	{
		path: demoPagesMenu.editPages.subMenu.editInCanvas.path,
		element: <EDIT.IN_CANVAS />,
	},
	{
		path: demoPagesMenu.editPages.subMenu.editInModal.path,
		element: <EDIT.IN_MODAL />,
	},

	{
		path: demoPagesMenu.pricingTable.path,
		element: <PRICING.PRICING_TABLE />,
	},

	/**
	 * END - Pages
	 */

	/**
	 * Auth Page
	 */
	{
		path: demoPagesMenu.page404.path,
		element: <AUTH.PAGE_404 />,
	},
	{
		path: demoPagesMenu.login.path,
		element: <Login />,
	},
	{
		path: demoPagesMenu.signUp.path,
		element: <Login isSignUp />,
	},

	/**
	 * App
	 */

	/**
	 * App > Project Management
	 */
	{
		path: demoPagesMenu.projectManagement.subMenu.list.path,
		element: <APP.PROJECT_MANAGEMENT.PROJECTS_LIST />,
	},
	{
		path: `${demoPagesMenu.projectManagement.subMenu.itemID.path}/:id`,
		element: <APP.PROJECT_MANAGEMENT.PROJECT />,
	},

	/**
	 * App > Knowledge
	 */
	// {
	// 	path: demoPagesMenu.knowledge.subMenu.grid.path,
	// 	element: <APP.KNOWLEDGE.GRID />,
	// },
	// {
		// path: `${demoPagesMenu.knowledge.subMenu.itemID.path}/:id`,
	// 	element: <APP.KNOWLEDGE.VIEW />,
	// },

	/**
	 * App > Sales
	 */
	{
		path: demoPagesMenu.sales.subMenu.transactions.path,
		element: <APP.SALES.TRANSACTIONS />,
	},
	{
		path: demoPagesMenu.sales.subMenu.salesList.path,
		element: <APP.SALES.PRODUCTS />,
	},
	{
		path: demoPagesMenu.sales.subMenu.productsGrid.path,
		element: <APP.SALES.PRODUCTS_GRID />,
	},
	{
		path: `${demoPagesMenu.sales.subMenu.productID.path}/:id`,
		element: <APP.SALES.PRODUCTS_VIEW />,
	},

	/**
	 * App > Appointment
	 */
	// {
	// 	path: demoPagesMenu.appointment.subMenu.calendar.path,
	// 	element: <APP.APPOINTMENT.CALENDAR />,
	// },
	{
		path: demoPagesMenu.appointment.subMenu.employeeList.path,
		element: <APP.APPOINTMENT.EMPLOYEE_LIST />,
	},
	{
		path: `${demoPagesMenu.appointment.subMenu.employeeID.path}/:id`,
		element: <APP.APPOINTMENT.EMPLOYEE_VIEW />,
	},
	{
		path: demoPagesMenu.appointment.subMenu.appointmentList.path,
		element: <APP.APPOINTMENT.APPOINTMENT_LIST />,
	},

	/**
	 * App > CRM
	 */
	{
		path: demoPagesMenu.crm.subMenu.dashboard.path,
		element: <APP.CRM.CRM_DASHBOARD />,
	},
	{
		path: demoPagesMenu.crm.subMenu.customersList.path,
		element: <APP.CRM.CUSTOMERS />,
	},
	{
		path: `${demoPagesMenu.crm.subMenu.customerID.path}/:id`,
		element: <APP.CRM.CUSTOMER />,
	},

	/**
	 * App > Chat
	 */
	{
		path: demoPagesMenu.chat.subMenu.withListChat.path,
		element: <APP.CHAT.WITH_LIST />,
	},
	{
		path: demoPagesMenu.chat.subMenu.onlyListChat.path,
		element: <APP.CHAT.ONLY_LIST />,
	},

	/**
	 * END - App
	 */

	/** ************************************************** */

	/**
	 * Page Layout Types
	 */
	{
		path: pageLayoutTypesPagesMenu.blank.path,
		element: <PAGE_LAYOUTS.BLANK />,
	},
	{
		path: pageLayoutTypesPagesMenu.pageLayout.subMenu.headerAndSubheader.path,
		element: <PAGE_LAYOUTS.HEADER_SUBHEADER />,
	},
	{
		path: pageLayoutTypesPagesMenu.pageLayout.subMenu.onlyHeader.path,
		element: <PAGE_LAYOUTS.HEADER />,
	},
	{
		path: pageLayoutTypesPagesMenu.pageLayout.subMenu.onlySubheader.path,
		element: <PAGE_LAYOUTS.SUBHEADER />,
	},
	{
		path: pageLayoutTypesPagesMenu.pageLayout.subMenu.onlyContent.path,
		element: <PAGE_LAYOUTS.CONTENT />,
	},
	{
		path: pageLayoutTypesPagesMenu.asideTypes.subMenu.defaultAside.path,
		element: <PAGE_LAYOUTS.ASIDE />,
	},
	{
		path: pageLayoutTypesPagesMenu.asideTypes.subMenu.minimizeAside.path,
		element: <PAGE_LAYOUTS.MINIMIZE_ASIDE />,
	},
];
const documentation: RouteProps[] = [
	/**
	 * Getting Started
	 */
	{
		path: gettingStartedPagesMenu.gettingStarted.subMenu.installation.path,
		element: <GETTING_STARTED.INSTALLATION />,
	},
	{
		path: gettingStartedPagesMenu.gettingStarted.subMenu.dev.path,
		element: <GETTING_STARTED.DEVELOPMENT />,
	},
	{
		path: gettingStartedPagesMenu.gettingStarted.subMenu.folderStructure.path,
		element: <GETTING_STARTED.FOLDER />,
	},
	{
		path: gettingStartedPagesMenu.gettingStarted.subMenu.bootstrapVariables.path,
		element: <GETTING_STARTED.BOOTSTRAP />,
	},
	{
		path: gettingStartedPagesMenu.gettingStarted.subMenu.projectStructure.path,
		element: <GETTING_STARTED.PROJECT />,
	},
	/**
	 * Routes
	 */
	{
		path: gettingStartedPagesMenu.routes.subMenu.router.path,
		element: <ROUTES.ROUTER />,
	},
	/**
	 * Bootstrap
	 */

	/**
	 * Content
	 */
	{
		path: componentPagesMenu.content.path,
		element: <CONTENT.CONTENTS />,
	},
	{
		path: componentPagesMenu.content.subMenu.typography.path,
		element: <CONTENT.TYPOGRAPHY />,
	},
	{
		path: componentPagesMenu.content.subMenu.images.path,
		element: <CONTENT.IMAGES />,
	},
	{
		path: componentPagesMenu.content.subMenu.tables.path,
		element: <CONTENT.TABLES />,
	},
	{
		path: componentPagesMenu.content.subMenu.figures.path,
		element: <CONTENT.FIGURES />,
	},

	/**
	 * Forms
	 */
	{
		path: componentPagesMenu.forms.path,
		element: <FORMS_PAGE.FORMS />,
	},
	{
		path: componentPagesMenu.forms.subMenu.formGroup.path,
		element: <FORMS_PAGE.FORM_GROUP />,
	},
	{
		path: componentPagesMenu.forms.subMenu.formControl.path,
		element: <FORMS_PAGE.FORM_CONTROLS />,
	},
	{
		path: componentPagesMenu.forms.subMenu.select.path,
		element: <FORMS_PAGE.SELECT />,
	},
	{
		path: componentPagesMenu.forms.subMenu.checksAndRadio.path,
		element: <FORMS_PAGE.CHECKS_AND_RADIO />,
	},
	{
		path: componentPagesMenu.forms.subMenu.range.path,
		element: <FORMS_PAGE.RANGE />,
	},
	{
		path: componentPagesMenu.forms.subMenu.inputGroup.path,
		element: <FORMS_PAGE.INPUT_GROUP />,
	},
	{
		path: componentPagesMenu.forms.subMenu.validation.path,
		element: <FORMS_PAGE.VALIDATION />,
	},
	{
		path: componentPagesMenu.forms.subMenu.wizard.path,
		element: <FORMS_PAGE.WIZARD />,
	},

	/**
	 * Components
	 */
	{
		path: componentPagesMenu.components.path,
		element: <COMPONENTS_PAGE.COMPONENTS />,
	},
	{
		path: componentPagesMenu.components.subMenu.tooltip.path,
		element: <COMPONENTS_PAGE.TOOLTIP />,
	},
	{
		path: componentPagesMenu.components.subMenu.toasts.path,
		element: <COMPONENTS_PAGE.TOASTS />,
	},
	{
		path: componentPagesMenu.components.subMenu.scrollspy.path,
		element: <COMPONENTS_PAGE.SCROLLSPY />,
	},
	{
		path: componentPagesMenu.components.subMenu.carousel.path,
		element: <COMPONENTS_PAGE.CAROUSEL />,
	},
	{
		path: componentPagesMenu.components.subMenu.spinners.path,
		element: <COMPONENTS_PAGE.SPINNER />,
	},
	{
		path: componentPagesMenu.components.subMenu.listGroup.path,
		element: <COMPONENTS_PAGE.LIST_GROUP />,
	},
	{
		path: componentPagesMenu.components.subMenu.breadcrumb.path,
		element: <COMPONENTS_PAGE.BREADCRUMB />,
	},
	{
		path: componentPagesMenu.components.subMenu.collapse.path,
		element: <COMPONENTS_PAGE.COLLAPSE />,
	},
	{
		path: componentPagesMenu.components.subMenu.pagination.path,
		element: <COMPONENTS_PAGE.PAGINATION />,
	},
	{
		path: componentPagesMenu.components.subMenu.progress.path,
		element: <COMPONENTS_PAGE.PROGRESS />,
	},
	{
		path: componentPagesMenu.components.subMenu.card.path,
		element: <COMPONENTS_PAGE.CARD />,
	},
	{
		path: componentPagesMenu.components.subMenu.button.path,
		element: <COMPONENTS_PAGE.BUTTON />,
	},
	{
		path: componentPagesMenu.components.subMenu.buttonGroup.path,
		element: <COMPONENTS_PAGE.BUTTON_GROUP />,
	},
	{
		path: componentPagesMenu.components.subMenu.alert.path,
		element: <COMPONENTS_PAGE.ALERT />,
	},
	{
		path: componentPagesMenu.components.subMenu.badge.path,
		element: <COMPONENTS_PAGE.BADGE />,
	},
	{
		path: componentPagesMenu.components.subMenu.popovers.path,
		element: <COMPONENTS_PAGE.POPOVERS />,
	},
	{
		path: componentPagesMenu.components.subMenu.dropdowns.path,
		element: <COMPONENTS_PAGE.DROPDOWN />,
	},
	{
		path: componentPagesMenu.components.subMenu.accordion.path,
		element: <COMPONENTS_PAGE.ACCORDION />,
	},
	{
		path: componentPagesMenu.components.subMenu.modal.path,
		element: <COMPONENTS_PAGE.MODAL />,
	},
	{
		path: componentPagesMenu.components.subMenu.navsTabs.path,
		element: <COMPONENTS_PAGE.NAVS_TABS />,
	},
	{
		path: componentPagesMenu.components.subMenu.offcanvas.path,
		element: <COMPONENTS_PAGE.OFF_CANVAS />,
	},
	{
		path: componentPagesMenu.components.subMenu.table.path,
		element: <COMPONENTS_PAGE.TABLE />,
	},

	/**
	 * Utilities
	 */
	{
		path: componentPagesMenu.utilities.path,
		element: <UTILITIES.UTILITIES />,
	},
	{
		path: componentPagesMenu.utilities.subMenu.api.path,
		element: <UTILITIES.API />,
	},
	{
		path: componentPagesMenu.utilities.subMenu.background.path,
		element: <UTILITIES.BACKGROUND />,
	},
	{
		path: componentPagesMenu.utilities.subMenu.borders.path,
		element: <UTILITIES.BORDERS />,
	},
	{
		path: componentPagesMenu.utilities.subMenu.colors.path,
		element: <UTILITIES.COLORS />,
	},
	{
		path: componentPagesMenu.utilities.subMenu.display.path,
		element: <UTILITIES.DISPLAY />,
	},
	{
		path: componentPagesMenu.utilities.subMenu.flex.path,
		element: <UTILITIES.FLEX />,
	},
	{
		path: componentPagesMenu.utilities.subMenu.float.path,
		element: <UTILITIES.FLOAT />,
	},
	{
		path: componentPagesMenu.utilities.subMenu.interactions.path,
		element: <UTILITIES.INTERACTIONS />,
	},
	{
		path: componentPagesMenu.utilities.subMenu.overflow.path,
		element: <UTILITIES.OVERFLOW />,
	},
	{
		path: componentPagesMenu.utilities.subMenu.position.path,
		element: <UTILITIES.POSITION />,
	},
	{
		path: componentPagesMenu.utilities.subMenu.shadows.path,
		element: <UTILITIES.SHADOWS />,
	},
	{
		path: componentPagesMenu.utilities.subMenu.sizing.path,
		element: <UTILITIES.SIZING />,
	},
	{
		path: componentPagesMenu.utilities.subMenu.spacing.path,
		element: <UTILITIES.SPACING />,
	},
	{
		path: componentPagesMenu.utilities.subMenu.text.path,
		element: <UTILITIES.TEXT />,
	},
	{
		path: componentPagesMenu.utilities.subMenu.verticalAlign.path,
		element: <UTILITIES.VERTICAL_ALIGN />,
	},
	{
		path: componentPagesMenu.utilities.subMenu.visibility.path,
		element: <UTILITIES.VISIBILITY />,
	},

	/**
	 * Extra
	 */

	/**
	 * Icons
	 */
	{
		path: componentPagesMenu.icons.path,
		element: <ICONS.ICONS_LIST />,
	},
	{
		path: componentPagesMenu.icons.subMenu.icon.path,
		element: <ICONS.ICON />,
	},
	{
		path: componentPagesMenu.icons.subMenu.material.path,
		element: <ICONS.MATERIAL />,
	},

	/**
	 * Charts
	 */
	{
		path: componentPagesMenu.charts.path,
		element: <CHARTS_PAGE.CHART_LIST />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsUsage.path,
		element: <CHARTS_PAGE.GENERAL_USAGE />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsSparkline.path,
		element: <CHARTS_PAGE.SPARKLINE />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsLine.path,
		element: <CHARTS_PAGE.LINE />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsArea.path,
		element: <CHARTS_PAGE.AREA />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsColumn.path,
		element: <CHARTS_PAGE.COLUMN />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsBar.path,
		element: <CHARTS_PAGE.BAR />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsMixed.path,
		element: <CHARTS_PAGE.MIXED />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsTimeline.path,
		element: <CHARTS_PAGE.TIMELINE />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsCandleStick.path,
		element: <CHARTS_PAGE.CANDLESTICK />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsBoxWhisker.path,
		element: <CHARTS_PAGE.BOX_WHISKER />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsPieDonut.path,
		element: <CHARTS_PAGE.PIE_DONUT />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsRadar.path,
		element: <CHARTS_PAGE.RADAR />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsPolar.path,
		element: <CHARTS_PAGE.POLAR />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsRadialBar.path,
		element: <CHARTS_PAGE.RADIAL_BAR />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsBubble.path,
		element: <CHARTS_PAGE.BUBBLE />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsScatter.path,
		element: <CHARTS_PAGE.SCATTER />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsHeatMap.path,
		element: <CHARTS_PAGE.HEAT_MAP />,
	},
	{
		path: componentPagesMenu.charts.subMenu.chartsTreeMap.path,
		element: <CHARTS_PAGE.TREE_MAP />,
	},

	{
		path: componentPagesMenu.notification.path,
		element: <EXTRA.NOTIFICATION />,
	},
	{
		path: componentPagesMenu.hooks.path,
		element: <EXTRA.HOOKS />,
	},
];
const contents = [...presentation, ...documentation];

export default contents;