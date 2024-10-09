import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProfiles = async () => {
        try {
            const token = localStorage.getItem('access_token');
            const response = await axios.get('http://localhost:3000/profiles', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProfiles(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const fetchProfileById = async (id) => {
        try {
            const token = localStorage.getItem('access_token');
            const response = await axios.get(`http://localhost:3000/profiles/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data; 
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    useEffect(() => {
        fetchProfiles();
    }, [fetchProfiles]);

    return (
        <ProfileContext.Provider value={{ profiles, loading, error, fetchProfileById }}>
            {children}
        </ProfileContext.Provider>
    );
};

export const useProfile = () => {
    return useContext(ProfileContext);
};
