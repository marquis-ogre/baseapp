//import cx from 'classnames';
import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { RouterProps } from 'react-router';
import { withRouter } from 'react-router-dom';
//import { SignInComponent, TwoFactorAuth } from '../../components';
import {setDocumentTitle } from '../../helpers';
import {
    RootState,
	labelFetch,
	selectCurrentColorTheme,
} from '../../modules';

interface ReduxProps {
    colorTheme: string;
}

type Props = ReduxProps & RouterProps & InjectedIntlProps;

class Terms extends React.Component<Props> {
    public componentDidMount() {
        setDocumentTitle('Terms & Conditions');
    }

    public componentWillReceiveProps(props: Props) {
        
    }

    public render() {
        //const { loading } = this.props;

        //const className = cx('pg-privacy-screen__container', { loading });
        return (
            <div className="pg-terms-screen">
			
			    <div className="wrapper">
					   <h2>{this.translate('term.heading-top')}</h2>
					   <p className="date">{this.translate('term.last-date')}</p>
					   <div className="paragraph">{this.translate('term.p1')}</div>
					   <p className="headingBold22">{this.translate('term.heading-risk')}</p>
					   <p className="paragraph">
					   <span className="headingBold15">{this.translate('term.heading-risk.heading1')}</span>
					   {this.translate('term.heading-risk.content1')}
					   </p>
					   
			    </div>
                { /* <div className={className}>{this.renderTermComp()}</div>*/ }
            </div>
        );
    }

    /*private renderTermComp = () => {
        const { loading } = this.props;
        //const { email } = this.state;

        return (
            <SignInComponent
                email={email}
            />
        );
    };*/
	
	 private translate = (key: string) => this.props.intl.formatMessage({id: key});

}

const mapStateToProps = (state: RootState): ReduxProps => ({
    colorTheme: selectCurrentColorTheme(state),
});

const mapDispatchToProps = dispatch => ({
    labelFetch: () => dispatch(labelFetch()),
});

// tslint:disable-next-line
export const TermsScreen = injectIntl(withRouter(connect(mapStateToProps, mapDispatchToProps)(Terms) as any));
