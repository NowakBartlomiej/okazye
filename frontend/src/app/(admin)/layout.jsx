'use client'

import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import { hasAdminRole } from '../api/fetchRoles';
import { notFound } from 'next/navigation';
import Navigation from '@/components/navigation';
import AdminSidebar from '@/components/adminSidebar';

const AdminLayout = ({ children }) => {
    // const { user } = useAuth();
    const { data: hasRole, isLoading } = hasAdminRole();

    if (!isLoading) {
        if (hasRole) {
            return <>
                <Navigation />
                <AdminSidebar>
                    {children}
                </AdminSidebar>
            </>
        } else {
            return notFound();
        }
    }
}

export default AdminLayout