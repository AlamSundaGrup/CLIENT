import React, { createContext, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ProfileContext = createContext({
    profiles: [],
    profile:[],
    loading: false,
    error: null,
    fetchProfiles: () => {},
    fetchProfileById: () => {},
});

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState([]);
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProfiles = async () => {
        setLoading(true);
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
        finally {
            setLoading(false);
        }
    };

    const fetchProfileById = async (id) => {
        setLoading(true);
        try {
            const token = localStorage.getItem('access_token');
            const response = await axios.get(`http://localhost:3000/profiles/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProfile(response.data); 
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ProfileContext.Provider value={{ profiles, profile, loading, error, fetchProfileById, fetchProfiles }}>
            {children}
        </ProfileContext.Provider>
    );
};
    ProfileProvider.propTypes = {
        children: PropTypes.node,
    };
// export const useProfile = () => {
//     return useContext(ProfileContext);
// };
