import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { RouterProps } from 'react-router';
import { withRouter } from 'react-router-dom';
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

class Privacy extends React.Component<Props> {
    public componentDidMount() {
        setDocumentTitle('Privacy & Conditions');
    }

    public componentWillReceiveProps(props: Props) {
        
    }

    public render() {
        return (
            <div className="pg-privacy-screen">
			
			    <div className="wrapper">
					   <h1>{this.translate('privacy.heading-top')}</h1>

					   <p className="h3">{this.translate('privacy.last-date')}</p>
					   <p className="h3">{this.translate('privacy.content-1')}</p>

                       {/* <p className="h3"><span className="subhead">{this.translate('privacy.title-1')}</span>
					   <span className="h3">{this.translate('privacy.title-1.content-1')} <br />
                                            {this.translate('privacy.title-1.content-2')} <br />
                                            {this.translate('privacy.title-1.content-3')} <br />
                                            {this.translate('privacy.title-1.content-4')} <br />
                                            {this.translate('privacy.title-1.content-5')} <br />
                                            {this.translate('privacy.title-1.content-6')} <br /> </span></p>  */}
 
					   <p className="h2">{this.translate('privacy.title-1.heading')}</p>

					   <p className="h2">{this.translate('privacy.title-1')}</p>
					   <p className="h3">{this.translate('privacy.title-1.content-1')}</p>
                       <p className="h3">{this.translate('privacy.title-1.content-2')}</p>
                       <p className="h3">{this.translate('privacy.title-1.content-3')}</p>
                       <p className="h3">{this.translate('privacy.title-1.content-4')}</p>
                       <p className="h3">{this.translate('privacy.title-1.content-5')}</p> 
                       <p className="h3">{this.translate('privacy.title-1.content-6')}</p> 

					   <p className="h2">{this.translate('privacy.title-2')}</p>
					   <p className="h3">{this.translate('privacy.title-2.content-1')}</p>
                       <p className="h3">{this.translate('privacy.title-2.content-2')}</p>
                       <p className="h3">{this.translate('privacy.title-2.content-3')}</p>
                       <p className="h3">{this.translate('privacy.title-2.content-4')}</p>
                       <p className="h3">{this.translate('privacy.title-2.content-5')}</p> 

                       <p className="h2">{this.translate('privacy.title-3')}</p>
					   <p className="h3">{this.translate('privacy.title-3.content-1')}</p>
					   <p className="h2">{this.translate('privacy.title-4')}</p>
					   <p className="h3">{this.translate('privacy.title-4.content-1')}</p>
					   <p className="h3">{this.translate('privacy.title-4.content-2')}</p>
					   <p className="h3">{this.translate('privacy.title-4.content-3')}</p>
					   <p className="h3">{this.translate('privacy.title-4.content-4')}</p>

					   <p className="h2">{this.translate('privacy.title-5')}</p>
					   <p className="h3">{this.translate('privacy.title-5.content-1')}</p>
					   <p className="h2">{this.translate('privacy.title-6')}</p>
					   <p className="h3">{this.translate('privacy.title-6.content-1')}</p>
					   <p className="h2">{this.translate('privacy.title-7')}</p>
					   <p className="h3">{this.translate('privacy.title-7.content-1')}</p>
					   <p className="h3">{this.translate('privacy.title-7.content-2')}</p>

					   <p className="h2">{this.translate('privacy.title-8')}</p>

					   <p className="h3"><span className="subhead">{this.translate('privacy.title-8.sub-1')}</span>
					   <span className="h3">{this.translate('privacy.title-8.sub-1.content')} </span></p>
					   <p className="h3"><span className="subhead">{this.translate('privacy.title-8.sub-2')}</span>
					   <span className="h3">{this.translate('privacy.title-8.sub-2.content')} </span></p>
					   <p className="h3"><span className="subhead">{this.translate('privacy.title-8.sub-3')}</span>
					   <span className="h3">{this.translate('privacy.title-8.sub-3.content')} </span></p>


					   <p className="h2">{this.translate('privacy.title-9')}</p>
					   <p className="h3">{this.translate('privacy.title-9.content-1')}</p>


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
export const PrivacyScreen = injectIntl(withRouter(connect(mapStateToProps, mapDispatchToProps)(Privacy) as any));
