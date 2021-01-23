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

class About extends React.Component<Props> {
    public componentDidMount() {
        setDocumentTitle('About Us');
    }

    public componentWillReceiveProps(props: Props) {
        
    }

    public render() {
        return (
            <div className="pg-about-screen">
			
			    <div className="wrapper">
                    <h1>{this.translate('about.heading-top')}</h1>

                    <p className="h3">{this.translate('about.last-date')}</p>
                    <p className="h3">{this.translate('about.content-1')}</p>
                    <p className="h3">{this.translate('about.content-2')}</p>
                    <p className="h3">{this.translate('about.content-3')}</p>
                    <p className="h3">{this.translate('about.content-4')}</p>
                    <p className="h3">{this.translate('about.content-5')}</p>
                    <p className="h2">{this.translate('about.content-6')}</p>
                    <h1>{this.translate('about.content-7')}</h1>


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
export const AboutScreen = injectIntl(withRouter(connect(mapStateToProps, mapDispatchToProps)(About) as any));
