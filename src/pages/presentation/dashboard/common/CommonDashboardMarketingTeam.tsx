
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';
import useDarkMode from '../../../../hooks/useDarkMode';
import { demoPagesMenu } from '../../../../menu';

const CommonDashboardMarketingTeam = () => {
	const { darkModeStatus } = useDarkMode();

	const navigate = useNavigate();
	const handleOnClickToEmployeeListPage = useCallback(
		() => navigate(`../${demoPagesMenu.appointment.subMenu.employeeList.path}`),
		[navigate],
	);

	return (
		<Card stretch>
			<CardHeader className='bg-transparent'>
				<CardLabel>
					<CardTitle tag='div' className='h5'>
						Tasks
					</CardTitle>
				</CardLabel>
				<CardActions>
					<Button
						icon='ArrowForwardIos'
						aria-label='Read More'
						hoverShadow='default'
						color={darkModeStatus ? 'dark' : undefined}
						onClick={handleOnClickToEmployeeListPage}
					/>
				</CardActions>
			</CardHeader>
			<CardBody>
				{/* <AvatarGroup>
					<Avatar
						srcSet={USERS.GRACE.srcSet}
						src={USERS.GRACE.src}
						userName={`${USERS.GRACE.name} ${USERS.GRACE.surname}`}
						color={USERS.GRACE.color}
					/>
					<Avatar
						srcSet={USERS.SAM.srcSet}
						src={USERS.SAM.src}
						userName={`${USERS.SAM.name} ${USERS.SAM.surname}`}
						color={USERS.SAM.color}
					/>
					<Avatar
						srcSet={USERS.CHLOE.srcSet}
						src={USERS.CHLOE.src}
						userName={`${USERS.CHLOE.name} ${USERS.CHLOE.surname}`}
						color={USERS.CHLOE.color}
					/>

					<Avatar
						srcSet={USERS.JANE.srcSet}
						src={USERS.JANE.src}
						userName={`${USERS.JANE.name} ${USERS.JANE.surname}`}
						color={USERS.JANE.color}
					/>
					<Avatar
						srcSet={USERS.JOHN.srcSet}
						src={USERS.JOHN.src}
						userName={`${USERS.JOHN.name} ${USERS.JOHN.surname}`}
						color={USERS.JOHN.color}
					/>
					<Avatar
						srcSet={USERS.RYAN.srcSet}
						src={USERS.RYAN.src}
						userName={`${USERS.RYAN.name} ${USERS.RYAN.surname}`}
						color={USERS.RYAN.color}
					/>
				</AvatarGroup> */}
				<div className="row">
					<div className="col text-warning">On Going</div>
					<div className="col text-success">Completed</div>
					<div className="col text-danger">Pending</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default CommonDashboardMarketingTeam;
