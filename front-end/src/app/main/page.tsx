// src/app/main/page.tsx
"use client"; // Ensure this directive is at the top

import withAuth from '../../hoc/withAuth';
import Main from '../../components/Main';

function MainPage() {
  return <Main />;
}

export default withAuth(MainPage);
