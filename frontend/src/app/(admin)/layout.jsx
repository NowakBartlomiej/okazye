'use client'

import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import { hasAdminRole } from '../api/fetchRoles';
import { notFound } from 'next/navigation';

const AdminLayout = ({ children }) => {
    // const { user } = useAuth();
    const {data: hasRole, isLoading} = hasAdminRole();

    if (!isLoading) {
        if (hasRole) {
            return <div>
                {children}
            </div>
        } else {
            return notFound();
        }
    }
}

export default AdminLayout