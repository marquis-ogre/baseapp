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
        return (
            <div className="pg-terms-screen">
			
			    <div className="wrapper">
					   <h1>{this.translate('terms.heading-top')}</h1>
					   <p className="h3">{this.translate('terms.last-date')}</p>
					   <p className="h3">{this.translate('terms.content-1')}</p>

                       <p className="h2">{this.translate('terms.title-1.heading')}</p>
					   <p className="h3">{this.translate('terms.title-1.content-1')}</p>
                       <p className="h3">{this.translate('terms.title-1.content-2')}</p>
                       <p className="h3">{this.translate('terms.title-1.content-3')}</p>
                       <p className="h3">{this.translate('terms.title-1.content-4')}</p>
                       <p className="h3">{this.translate('terms.title-1.content-5')}</p> 
                       <p className="h3">{this.translate('terms.title-1.content-6')}</p> 
                       <p className="h3">{this.translate('terms.title-1.content-7')}</p> 
                       <p className="h3">{this.translate('terms.title-1.content-8')}</p> 
                       <p className="h3">{this.translate('terms.title-1.content-9')}</p> 

                       <p className="h2">{this.translate('terms.title-2.heading')}</p>
					   <p className="h3">{this.translate('terms.title-2.content-1')}</p>

                       <p className="h2">{this.translate('terms.title-3.heading')}</p>
					   <p className="h3">{this.translate('terms.title-3.content-1')}</p>
                       <p className="h3">{this.translate('terms.title-3.content-2')}</p>
					   <p className="h3">{this.translate('terms.title-3.content-3')}</p>
					   <p className="h3">{this.translate('terms.title-3.content-4')}</p>
					   <p className="h3">{this.translate('terms.title-3.content-5')}</p>
                    
                       <p className="h2">{this.translate('terms.title-4.heading')}</p>
					   <p className="h3">{this.translate('terms.title-4.content-1')}</p>

                       <p className="h2">{this.translate('terms.title-5.heading')}</p>
					   <p className="h3">{this.translate('terms.title-5.content-1')}</p>
                       <p className="h3">{this.translate('terms.title-5.content-2')}</p>
					   <p className="h3">{this.translate('terms.title-5.content-3')}</p>
					   <p className="h3">{this.translate('terms.title-5.content-4')}</p>

                       <p className="h2">{this.translate('terms.title-6.heading')}</p>
					   <p className="h3">{this.translate('terms.title-6.content-1')}</p>
                       <p className="h3">{this.translate('terms.title-6.content-2')}</p>
					   <p className="h3">{this.translate('terms.title-6.content-3')}</p>
					   <p className="h3">{this.translate('terms.title-6.content-4')}</p>

                       <p className="h2">{this.translate('terms.title-7.heading')}</p>
					   <p className="h3">{this.translate('terms.title-7.content-1')}</p>
                       <p className="h3">{this.translate('terms.title-7.content-2')}</p>
					   <p className="h3">{this.translate('terms.title-7.content-3')}</p>

                       <p className="h2">{this.translate('terms.title-8.heading')}</p>
					   <p className="h3">{this.translate('terms.title-8.content-1')}</p>

                       <p className="h2">{this.translate('terms.title-9.heading')}</p>
					   <p className="h3">{this.translate('terms.title-9.content-1')}</p>

                       <p className="h2">{this.translate('terms.title-10.heading')}</p>
					   <p className="h3">{this.translate('terms.title-10.content-1')}</p>

                       <p className="h2">{this.translate('terms.title-11.heading')}</p>
					   <p className="h3">{this.translate('terms.title-11.content-1')}</p>
                       <p className="h3">{this.translate('terms.title-11.content-2')}</p>
					   <p className="h3">{this.translate('terms.title-11.content-3')}</p>
					   <p className="h3">{this.translate('terms.title-11.content-4')}</p>
					   <p className="h3">{this.translate('terms.title-11.content-5')}</p>
                       <p className="h3">{this.translate('terms.title-11.content-6')}</p>
					   <p className="h3">{this.translate('terms.title-11.content-7')}</p>
					   <p className="h3">{this.translate('terms.title-11.content-8')}</p>

                       <p className="h2">{this.translate('terms.title-12.heading')}</p>
					   <p className="h3">{this.translate('terms.title-12.content-1')}</p>

                       <p className="h2">{this.translate('terms.title-13.heading')}</p>
					   <p className="h3">{this.translate('terms.title-13.content-1')}</p>

                       <p className="h2">{this.translate('terms.title-14.heading')}</p>
					   <p className="h3">{this.translate('terms.title-14.content-1')}</p>

                       <p className="h2">{this.translate('terms.title-15.heading')}</p>
					   <p className="h3">{this.translate('terms.title-15.content-1')}</p>
                       <p className="h3">{this.translate('terms.title-15.content-2')}</p>
					   <p className="h3">{this.translate('terms.title-15.content-3')}</p>
					   <p className="h3">{this.translate('terms.title-15.content-4')}</p>
					   <p className="h3">{this.translate('terms.title-15.content-5')}</p>
                       <p className="h3">{this.translate('terms.title-15.content-6')}</p>
					   <p className="h3">{this.translate('terms.title-15.content-7')}</p>
					   <p className="h3">{this.translate('terms.title-15.content-8')}</p>
                       <p className="h3">{this.translate('terms.title-15.content-9')}</p>
					   <p className="h3">{this.translate('terms.title-15.content-10')}</p>
					   <p className="h3">{this.translate('terms.title-15.content-11')}</p>
					   <p className="h3">{this.translate('terms.title-15.content-12')}</p>
                       <p className="h3">{this.translate('terms.title-15.content-13')}</p>
					   <p className="h3">{this.translate('terms.title-15.content-14')}</p>
					   <p className="h3">{this.translate('terms.title-15.content-15')}</p>

                       <p className="h2">{this.translate('terms.title-16.heading')}</p>
					   <p className="h3">{this.translate('terms.title-16.content-1')}</p>
                       <p className="h3">{this.translate('terms.title-16.content-2')}</p>
					   <p className="h3">{this.translate('terms.title-16.content-3')}</p>

                       <p className="h2">{this.translate('terms.title-17.heading')}</p>
					   <p className="h3">{this.translate('terms.title-17.content-1')}</p>
                       <p className="h3">{this.translate('terms.title-17.content-2')}</p>
					   <p className="h3">{this.translate('terms.title-17.content-3')}</p>
					   <p className="h3">{this.translate('terms.title-17.content-4')}</p>
					   <p className="h3">{this.translate('terms.title-17.content-5')}</p>
                       <p className="h3">{this.translate('terms.title-17.content-6')}</p>
					   <p className="h3">{this.translate('terms.title-17.content-7')}</p>
					   <p className="h3">{this.translate('terms.title-17.content-8')}</p>
                       <p className="h3">{this.translate('terms.title-17.content-9')}</p>
					   <p className="h3">{this.translate('terms.title-17.content-10')}</p>
					   <p className="h3">{this.translate('terms.title-17.content-11')}</p>
					   <p className="h3">{this.translate('terms.title-17.content-12')}</p>

                       <p className="h2">{this.translate('terms.title-18.heading')}</p>
					   <p className="h3">{this.translate('terms.title-18.content-1')}</p>

                       <p className="h2">{this.translate('terms.title-19.heading')}</p>
					   <p className="h3">{this.translate('terms.title-19.content-1')}</p>

                       <p className="h2">{this.translate('terms.title-20.heading')}</p>
					   <p className="h3">{this.translate('terms.title-20.content-1')}</p>
                       <p className="h3">{this.translate('terms.title-20.content-2')}</p>
					   <p className="h3">{this.translate('terms.title-20.content-3')}</p>
					   <p className="h3">{this.translate('terms.title-20.content-4')}</p>
					   <p className="h3">{this.translate('terms.title-20.content-5')}</p>
                       <p className="h3">{this.translate('terms.title-20.content-6')}</p>
					   <p className="h3">{this.translate('terms.title-20.content-7')}</p>
					   <p className="h3">{this.translate('terms.title-20.content-8')}</p>
                       <p className="h3">{this.translate('terms.title-20.content-9')}</p>
					   <p className="h3">{this.translate('terms.title-20.content-10')}</p>
                       
                       <p className="h2">{this.translate('terms.title-21.heading')}</p>
					   <p className="h3">{this.translate('terms.title-21.content-1')}</p>

                       <p className="h2">{this.translate('terms.title-22.heading')}</p>
					   <p className="h3">{this.translate('terms.title-22.content-1')}</p>
                       
                       <p className="h2">{this.translate('terms.title-23.heading')}</p>
					   <p className="h3">{this.translate('terms.title-23.content-1')}</p>

                       <p className="h2">{this.translate('terms.title-24.heading')}</p>
					   <p className="h3">{this.translate('terms.title-24.content-1')}</p>
                       
                       <p className="h2">{this.translate('terms.title-25.heading')}</p>
					   <p className="h3">{this.translate('terms.title-25.content-1')}</p>

			    </div>
            </div>
        );
    }
	
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
