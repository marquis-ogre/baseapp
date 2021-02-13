import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Link, RouteProps, withRouter } from 'react-router-dom';

const LogoImage = require('../../assets/images/logo.svg');

const TelegramIcon = require('../../assets/images/landing/social/Telegram.svg');
const LinkedInIcon = require('../../assets/images/landing/social/LinkedIn.svg');
const TwitterIcon = require('../../assets/images/landing/social/Twitter.svg');
const YouTubeIcon = require('../../assets/images/landing/social/YouTube.svg');
const RedditIcon = require('../../assets/images/landing/social/Reddit.svg');
const FacebookIcon = require('../../assets/images/landing/social/Facebook.svg');
const MediumIcon = require('../../assets/images/landing/social/Medium.svg');
const CoinMarketIcon = require('../../assets/images/landing/social/CoinMarket.svg');

type Props =  RouteProps & InjectedIntlProps;

class FooterComponent extends React.Component<Props> {
    public render() {
        if (this.props.history.location.pathname.startsWith('/confirm')) {
            return <React.Fragment />;
        }

        return (
            <React.Fragment>
				 <div className="pg-footer__footer">
                <div className="pg-footer__footer__wrap">
                    <div className="pg-footer__footer__wrap__left" onClick={e => this.handleScrollTop()}>
                        <img src={LogoImage} alt="PythonEx Logo"/>
                    </div>
                    <div className="pg-footer__footer__wrap__navigation">
                        <div className="pg-footer__footer__wrap__navigation__col">
                            <Link to="/trading/">{this.translate('page.links.footer.exchange')}</Link>
                            <Link to="/wallets">{this.translate('page.links.footer.wallets')}</Link>
                            <Link to="/">{this.translate('page.links.footer.fees')}</Link>
                        </div>
                        <div className="pg-footer__footer__wrap__navigation__col">
                            <Link to="/">{this.translate('page.links.footer.faq')}</Link>
                            <Link to="/terms">{this.translate('page.links.footer.terms')}</Link>
                            <Link to="/privacy/">{this.translate('page.links.footer.privacy')}</Link>
                        </div>
                        <div className="pg-footer__footer__wrap__navigation__col">
                            <Link to="/about/">{this.translate('page.links.footer.about')}</Link>
                            <Link to="/">{this.translate('page.links.footer.community')}</Link>
                            <Link to="/">{this.translate('page.links.footer.info')}</Link>
                        </div>
                    </div>
                    <div className="pg-footer__footer__wrap__social">
                        <div className="pg-footer__footer__wrap__social__row">
                            <a href="https://t.me/"><img src={TelegramIcon} alt="Telegram" /></a>
                            <a href="https://twitter.com/"><img src={LinkedInIcon} alt="LinkedIn" /></a>
                            <a href="https://in.linkedin.com/"><img src={TwitterIcon} alt="Twitter" /></a>
                            <a href="https://youtube.com"><img src={YouTubeIcon} alt="YouTube" /></a>
                        </div>
                        <div className="pg-footer__footer__wrap__social__row">
                            <a href="https://reddit.com"><img src={RedditIcon} alt="Reddit" /></a>
                            <a href="https://facebook.com"><img src={FacebookIcon} alt="Facebook" /></a>
                            <a href="https://mdeium.com"><img src={MediumIcon} alt="MediumIcon" /></a>
                            <a href="https://coinmarket.com"><img src={CoinMarketIcon} alt="CoinMarket" /></a>
                        </div>
                    </div>
                </div>
                <span className="pg-footer__footer__rights">{this.translate('page.footer.rights')}</span>
            </div>
                <footer className="pg-footer">
                    <span>Powered by</span>
                    <a href="https://www.openware.com">openware.com</a>
                </footer>
            </React.Fragment>
        );
    }
	
	private handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    private translate = (key: string) => this.props.intl.formatMessage({id: key});
}

// tslint:disable-next-line:no-any
const Footer = withRouter(injectIntl(FooterComponent as any) as any);

export {
    Footer,
};
