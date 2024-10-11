import { createContext, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const ProfileContext = createContext({
  profiles: [],
  profile: [],
  isLoading: false,
  error: null,
  fetchProfiles: () => {},
  fetchProfileById: () => {},
});

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfiles = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await axios.get("https://belakangan.ajiesep.tech/profiles", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfiles(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchProfileById = async (id) => {
    setIsLoading(true);
    try {
        const token = localStorage.getItem("access_token");
        
        const response = await axios.get(`https://belakangan.ajiesep.tech/profiles/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        
      setProfile(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        profiles,
        profile,
        isLoading,
        error,
        fetchProfileById,
        fetchProfiles,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
ProfileProvider.propTypes = {
  children: PropTypes.node,
};
