// import classnames from 'classnames';
import { History } from 'history';
import * as React from 'react';
import {
    connect,
    MapDispatchToPropsFunction,
    MapStateToProps,
} from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Link, RouteProps, withRouter } from 'react-router-dom';
import { Moon } from '../../assets/images/Moon';
import { Sun } from '../../assets/images/Sun';
import { colors, pgRoutes } from '../../constants';
import {
    changeColorTheme,
    changeLanguage,
    logoutFetch,
    Market,
    RootState,
    selectCurrentColorTheme,
    selectCurrentLanguage,
    selectCurrentMarket,
    selectUserInfo,
    selectUserLoggedIn,
    User,
    walletsReset,
} from '../../modules';

export interface ReduxProps {
    colorTheme: string;
    currentMarket: Market | undefined;
    address: string;
    isLoggedIn: boolean;
    lang: string;
    success?: boolean;
    user: User;
	//isActive: boolean;
}

interface DispatchProps {
    changeColorTheme: typeof changeColorTheme;
    changeLanguage: typeof changeLanguage;
    logoutFetch: typeof logoutFetch;
    walletsReset: typeof walletsReset;
}

export interface OwnProps {
    onLinkChange?: () => void;
    history: History;
}

type NavbarProps = OwnProps & ReduxProps & RouteProps & DispatchProps;

interface NavbarState {
    isOpen: boolean;
    isOpenLanguage: boolean;
    email: string;
    message: string;
    name: string;
    recaptchaResponse: string;
    errorModal: boolean;
}

// tslint:disable:jsx-no-lambda
class NavBarComponent extends React.Component<NavbarProps, NavbarState> {
    public readonly state = {
        isOpen: false,
        isOpenLanguage: false,
        email: '',
        name: '',
        message: '',
        recaptchaResponse: '',
        errorModal: false,
    };

    public render() {
        const { isLoggedIn, colorTheme, /*isActive, lang */} = this.props;
		const address = this.props.history.location ? this.props.history.location.pathname : '';
		const isLight = colorTheme === 'light';
        //const lightBox = isLight ? 'light-box' : '';
        //const languageName = lang.toUpperCase();

        return (
            <div className={'pg-navbar'}>
                <div className="pg-navbar__header-settings">
					{/* This custom content 
					{this.renderProfileLink()}
					
					<div>
						{pgRoutes(isLoggedIn).map(this.renderNavItems(address))}
					</div>
					
					{this.renderLogout()}
					*/ }
					{this.renderProfileLink()}
					<div className="pg-navbar-wrapper-items">
						{pgRoutes(isLoggedIn, isLight).map(this.renderNavItems(address))}
					</div>
					{this.renderLogout()}
                    <div className="pg-navbar__header-settings__switcher">
                        <div
                            className="pg-navbar__header-settings__switcher__items"
                            onClick={e => this.handleChangeCurrentStyleMode(colorTheme === 'light' ? 'basic' : 'light')}
                        >
                            {this.getLightDarkMode()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

	/* function moved from sidebar to Navbar */
	public renderNavItems = (address: string) => (values: string[], index: number) => {
        const { currentMarket } = this.props;

        const [name, url, img] = values;
        const path = url.includes('/trading') && currentMarket ? `/trading/${currentMarket.id}` : url;
        const isActive = (url === '/trading/' && address.includes('/trading')) || address === url;
		/*const iconClassName = classnames('pg-navbar-wrapper-nav-item-img', {
            'pg-navbar-wrapper-nav-item-img--active': isActive,
        });*/
		   
        return (
            <Link to={path} key={index} className={`${isActive && 'route-selected'}`}>
				<div className="pg-navbar-wrapper-items-link">
                        <img
                            className="pg-navbar-wrapper-items-link-img"
                            src={require(`../../assets/images/sidebar/${img}.svg`)}
                            alt="icon"
                        />
                        <p className="pg-navbar-wrapper-items-link-text">
                            <FormattedMessage id={name} />
                        </p>
                </div>
					
            </Link>
        );
    };
	
	public renderProfileLink = () => {
        const { isLoggedIn, colorTheme, location } = this.props;
        const isLight = colorTheme === 'light';
        const address = location ? location.pathname : '';
        const isActive = address === '/profile';

        return isLoggedIn && (
            <div className="pg-navbar-wrapper-profile">
                <Link to="/profile"  className={`${isActive && 'route-selected'}`}>
                    <div className="pg-navbar-wrapper-profile-link">
                        <img
                            className="pg-navbar-wrapper-profile-link-img"
                            src={require(`../../assets/images/sidebar/profile${isLight ? 'Light' : '' }.svg`)}
                            alt="icon"
                        />
                        <p className="pg-navbar-wrapper-profile-link-text">
                            <FormattedMessage id={'page.header.navbar.profile'} />
                        </p>
                    </div>
                </Link>
            </div>
        );
    };
	
	public renderLogout = () => {
        const { isLoggedIn, colorTheme } = this.props;
        const isLight = colorTheme === 'light';
        if (!isLoggedIn) {
            return null;
        }

        return (
            <div className="pg-navbar-wrapper-logout">
                <div className="pg-navbar-wrapper-logout-link" onClick={this.props.logoutFetch}>
                    <img
                        className="pg-navbar-wrapper-logout-link-img"
                        src={require(`../../assets/images/sidebar/logout${isLight ? 'Light' : '' }.svg`)}
                        alt="icon"
                    />
                    <p className="pg-navbar-wrapper-logout-link-text">
                        <FormattedMessage id={'page.body.profile.content.action.logout'} />
                    </p>
                </div>
            </div>
        );
    };
    private getLightDarkMode = () => {
        const { colorTheme } = this.props;

        if (colorTheme === 'basic') {
            return (
                <React.Fragment>
                    <div className="switcher-item">
                        <Sun fillColor={colors.light.navbar.sun}/>
                    </div>
                    <div className="switcher-item switcher-item--active">
                        <Moon fillColor={colors.light.navbar.moon}/>
                    </div>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <div className="switcher-item switcher-item--active">
                    <Sun fillColor={colors.basic.navbar.sun}/>
                </div>
                <div className="switcher-item">
                    <Moon fillColor={colors.basic.navbar.moon}/>
                </div>
            </React.Fragment>
        );
    };

    private handleChangeCurrentStyleMode = (value: string) => {
        this.props.changeColorTheme(value);
    };
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, RootState> =
    (state: RootState): ReduxProps => ({
        colorTheme: selectCurrentColorTheme(state),
        currentMarket: selectCurrentMarket(state),
        address: '',
        lang: selectCurrentLanguage(state),
        user: selectUserInfo(state),
        isLoggedIn: selectUserLoggedIn(state),
    });

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        changeColorTheme: payload => dispatch(changeColorTheme(payload)),
        changeLanguage: payload => dispatch(changeLanguage(payload)),
        logoutFetch: () => dispatch(logoutFetch()),
        walletsReset: () => dispatch(walletsReset()),
    });

// tslint:disable-next-line:no-any
const NavBar = withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarComponent) as any) as any;

export {
    NavBar,
};
