"use client";
import Checkoutpart from '@/component/checkoutpart'
import React, { Suspense } from 'react'
export const dynamic = "force-dynamic";

function CheckOutPage() {
  return (
    <Suspense fallback={<div style={{ padding: '50px', textAlign: 'center' }}>Loading checkout...</div>}>
      <Checkoutpart/>
    </Suspense>
  )
}

export default CheckOutPage
