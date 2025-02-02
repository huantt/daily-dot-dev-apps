import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import MainLayout, {
  MainLayoutProps,
} from '@dailydotdev/shared/src/components/MainLayout';
import FeedLayout from '@dailydotdev/shared/src/components/FeedLayout';
import { getLayout as getFooterNavBarLayout } from './FooterNavBarLayout';

export default FeedLayout;

export const getLayout = (
  page: ReactNode,
  pageProps: Record<string, unknown>,
  layoutProps: MainLayoutProps,
): ReactNode => {
  // @NOTE see https://dailydotdev.atlassian.net/l/cp/dK9h1zoM
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return getFooterNavBarLayout(
    <MainLayout {...layoutProps} showPostButton activePage={router?.asPath}>
      <FeedLayout>{page}</FeedLayout>
    </MainLayout>,
  );
};
