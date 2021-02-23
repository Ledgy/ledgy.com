import React, { useEffect, ReactElement, useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

import 'typeface-open-sans';
import 'katex/dist/katex.min.css';
import 'prism-themes/themes/prism-ghcolors.css';
import '../styles/_index.scss';

import { loadSegment } from '../helpers';
import { Title } from './utils';
import { langFromPath, langPrefix, deprefix } from '../i18n-config';

import {
  HelmetIndexLayout,
  Footer,
  Loader,
  Nav,
  PublicityBanner,
  dynamicI18n,
} from '../components';

type AppProps = LayoutProps & {
  children: ReactElement;
};

const Initialize = ({ segmentDestinations }: { segmentDestinations: string[] }) => {
  useEffect(() => {
    setTimeout(() => {
      loadSegment(segmentDestinations);
    }, 1414);
  }, []);
  return null;
};

const metaDataQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        segmentDestinations
      }
    }
    allContentfulSiteMetaProps {
      edges {
        node {
          description
          title
        }
      }
    }
  }
`;

const App = ({ children, ...props }: AppProps) => {
  const data = useStaticQuery(metaDataQuery);
  const { lang, location } = props;
  const { site, allContentfulSiteMetaProps } = data;
  const { siteUrl, segmentDestinations } = site.siteMetadata;

  const thumbnailUrl = `${siteUrl}/thumbnail-874d5c.png`;
  const { node }: { node: SiteMetaProps } = allContentfulSiteMetaProps.edges[0];
  const { title, description } = node;

  const prefix = langPrefix(lang);
  const pathname = deprefix(location.pathname);
  const isAppShell = pathname.includes('offline-plugin-app-shell-fallback');
  const isDemoPage = pathname.includes('demo');
  return (
    <div>
      <Title
        title={dynamicI18n(title)}
        description={dynamicI18n(description)}
        thumbnailUrl={thumbnailUrl}
      />
      <Initialize segmentDestinations={segmentDestinations} />
      <HelmetIndexLayout lang={lang} siteUrl={siteUrl} pathname={pathname} />
      <Nav {...props} prefix={prefix} />
      {isAppShell ? (
        <Loader />
      ) : (
        <>
          <PublicityBanner pathname={pathname} />
          {React.cloneElement(children, { prefix, lang })}
          {!isDemoPage && <Footer {...props} prefix={prefix} />}
        </>
      )}
    </div>
  );
};

const Main = (props: AppProps) => {
  const lang = langFromPath(props.location.pathname);
  useMemo(() => i18n.activate(lang), [lang]);
  return (
    <I18nProvider i18n={i18n}>
      <App {...props} lang={lang} />
    </I18nProvider>
  );
};

export default Main;

// eslint-disable-next-line
console.log(`
██╗     ███████╗██████╗  ██████╗██╗   ██╗
██║     ██╔════╝██╔══██╗██╔════╝╚██╗ ██╔╝
██║     █████╗  ██║  ██║██║  ███╗╚████╔╝
██║     ██╔══╝  ██║  ██║██║   ██║ ╚██╔╝
███████╗███████╗██████╔╝╚██████╔╝  ██║
╚══════╝╚══════╝╚═════╝  ╚═════╝   ╚═╝

==========================

Looking for a job? 🤓
https://ledgy.com/jobs

==========================
`);
