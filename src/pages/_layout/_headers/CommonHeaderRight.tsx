/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactNode, useContext, useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useTour } from '@reactour/tour';
import Button, { IButtonProps } from '../../../components/bootstrap/Button';
import { HeaderRight } from '../../../layout/Header/Header';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../components/bootstrap/OffCanvas';
import Alert from '../../../components/bootstrap/Alert';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import Icon from '../../../components/icon/Icon';
import ThemeContext from '../../../contexts/themeContext';
import LANG, { getLangWithKey, ILang } from '../../../lang';
import showNotification from '../../../components/extras/showNotification';
import useDarkMode from '../../../hooks/useDarkMode';
import Popovers from '../../../components/bootstrap/Popovers';
import Spinner from '../../../components/bootstrap/Spinner';
import AuthContext from '../../../contexts/authContext';

interface ICommonHeaderRightProps {
	beforeChildren?: ReactNode;
	afterChildren?: ReactNode;
}
const CommonHeaderRight: FC<ICommonHeaderRightProps> = ({ beforeChildren, afterChildren }) => {
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();

	const { fullScreenStatus, setFullScreenStatus } = useContext(ThemeContext);
	const styledBtn: IButtonProps = {
		color: darkModeStatus ? 'dark' : 'light',
		hoverShadow: 'default',
		isLight: !darkModeStatus,
		size: 'lg',
	};

	const [offcanvasStatus, setOffcanvasStatus] = useState(false);

	const { i18n } = useTranslation();

	const changeLanguage = (lng: ILang['key']['lng']) => {
		i18n.changeLanguage(lng).then();
		showNotification(
			<span className='d-flex align-items-center'>
				<Icon icon={getLangWithKey(lng)?.icon} size='lg' className='me-1' />
				<span>{`Language changed to ${getLangWithKey(lng)?.text}`}</span>
			</span>,
			'You updated the language of the site. (Only "Aside" was prepared as an example.)',
		);
	};

	/**
	 * Language attribute
	 */
	useLayoutEffect(() => {
		document.documentElement.setAttribute('lang', i18n.language.substring(0, 2));
	});

	const { setIsOpen } = useTour();
	const { user, userData } = useContext(AuthContext);

	console.log('userData:', userData);

	return (
		<HeaderRight>
			<div className='row g-3'>
				{beforeChildren}
				{/* Tour Modal  */}
				{/* {localStorage.getItem('tourModalStarted') === 'shown' && (
					<div className='col-auto position-relative'>
						<Popovers trigger='hover' desc='Start the "Facit" tour'>
							<Button
								// eslint-disable-next-line react/jsx-props-no-spreading
								{...styledBtn}
								icon='Tour'
								onClick={() => setIsOpen(true)}
								aria-label='Start the "Facit" tour'
							/>
						</Popovers>
						<Icon
							icon='Circle'
							className={classNames(
								'position-absolute start-65',
								'text-danger',
								'animate_animated animateheartBeat animateinfinite animate_slower',
							)}
						/>
					</div>
				)}

				{/* Dark Mode */}
				<div className='col-auto'>
					<Popovers trigger='hover' desc='Dark / Light mode'>
						<Button
							// eslint-disable-next-line react/jsx-props-no-spreading
							{...styledBtn}
							onClick={() => setDarkModeStatus(!darkModeStatus)}
							className='btn-only-icon'
							data-tour='dark-mode'
							aria-label='Toggle dark mode'>
							<Icon
								icon={darkModeStatus ? 'DarkMode' : 'LightMode'}
								color={darkModeStatus ? 'info' : 'warning'}
								className='btn-icon'
							/>
						</Button>
					</Popovers>
				</div>

				{/*	Full Screen */}
				<div className='col-auto'>
					<Popovers trigger='hover' desc='Fullscreen'>
						<Button
							// eslint-disable-next-line react/jsx-props-no-spreading
							{...styledBtn}
							icon={fullScreenStatus ? 'FullscreenExit' : 'Fullscreen'}
							onClick={() => setFullScreenStatus(!fullScreenStatus)}
							aria-label='Toggle fullscreen'
						/>
					</Popovers>
				</div>

				{/* Lang Selector + */}
				{/* <div className='col-auto'>
					<Dropdown>
						<DropdownToggle hasIcon={false}>
							{typeof getLangWithKey(i18n.language as ILang['key']['lng'])?.icon ===
							'undefined' ? (
								<Button
									// eslint-disable-next-line react/jsx-props-no-spreading
									{...styledBtn}
									className='btn-only-icon'
									aria-label='Change language'
									data-tour='lang-selector'>
									<Spinner isSmall inButton='onlyIcon' isGrow />
								</Button>
							) : (
								<Button
									// eslint-disable-next-line react/jsx-props-no-spreading
									{...styledBtn}
									icon={
										getLangWithKey(i18n.language as ILang['key']['lng'])?.icon
									}
									aria-label='Change language'
									data-tour='lang-selector'
								/>
							)}
						</DropdownToggle>
						<DropdownMenu isAlignmentEnd data-tour='lang-selector-menu'>
							{Object.keys(LANG).map((i) => (
								<DropdownItem key={LANG[i].lng}>
									<Button
										icon={LANG[i].icon}
										onClick={() => changeLanguage(LANG[i].lng)}>
										{LANG[i].text}
									</Button>
								</DropdownItem>
							))}
						</DropdownMenu>
					</Dropdown>
				</div>

				{/* Quick Panel */}

				{/*	Notifications */}
				<div className='col-auto'>
					<Button
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...styledBtn}
						icon='Notifications'
						onClick={() => setOffcanvasStatus(true)}
						aria-label='Notifications'
					/>
				</div>
				<div className="col-auto d-flex align-items-center">
					{(userData as any)?.src && (
						<img
							src={(userData as any).src}
							alt={(userData as any)?.name || user}
							style={{
								width: 36,
								height: 36,
								borderRadius: '50%',
								objectFit: 'cover',
								marginRight: 10,
								border: '2px solid #eee',
							}}
						/>
					)}
					<div className="d-flex flex-column align-items-end">
						<span className="fw-bold" style={{ fontSize: 16 }}>
							{(userData as any)?.name || user}
						</span>
						<span className="text-muted" style={{ fontSize: 12 }}>
							{(userData as any)?.position || ''}
						</span>
					</div>
				</div>
				{/* {afterChildren} */}
			</div>

			<OffCanvas
				id='notificationCanvas'
				titleId='offcanvasExampleLabel'
				placement='end'
				isOpen={offcanvasStatus}
				setOpen={setOffcanvasStatus}>
				<OffCanvasHeader setOpen={setOffcanvasStatus}>
					<OffCanvasTitle id='offcanvasExampleLabel'>Notifications</OffCanvasTitle>
				</OffCanvasHeader>
				<OffCanvasBody>
					<Alert icon='ViewInAr' isLight color='info' className='flex-nowrap'>
						4 new components added.
					</Alert>
					<Alert icon='ThumbUp' isLight color='warning' className='flex-nowrap'>
						New products added to stock.
					</Alert>
					<Alert icon='Inventory2' isLight color='danger' className='flex-nowrap'>
						There are products that need to be packaged.
					</Alert>
					<Alert icon='BakeryDining' isLight color='success' className='flex-nowrap'>
						Your food order is waiting for you at the consultation.
					</Alert>
					<Alert icon='Escalator' isLight color='primary' className='flex-nowrap'>
						Escalator will turn off at 6:00 pm.
					</Alert>
				</OffCanvasBody>
			</OffCanvas>
		</HeaderRight>
	);
};

export default CommonHeaderRight;
