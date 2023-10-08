import React from "react";
import styles from "../../../styles/User.module.css";
import Typography from "@mui/material/Typography";
import { useSession } from "next-auth/react";

export default function UserData() {
  const { data: session, status } = useSession();

  if (session) {
    return (
      <div className={styles.data}>
        <div className={styles.dataCell}>
          <Typography variant="h1">Profile Id:</Typography>
          <div className={styles.address}>
            <Typography variant="h2">{session?.user.profileId}</Typography>
          </div>
        </div>
        <div className={styles.dataCell}>
          <Typography variant="h3">Account:</Typography>
          <div className={styles.address}>
            {/* account address */}
            <Typography copyable variant="h3">
              {session?.user.address}
            </Typography>
          </div>
        </div>
        <div className={styles.dataCell}>
          <Typography variant="h3">Network:</Typography>
          <div className={styles.address}>
            <Typography variant="body16">{session?.user.network}</Typography>
          </div>
        </div>
        <div className={styles.dataCell}>
          <Typography variant="h3">ExpTime:</Typography>
          <div className={styles.address}>
            <Typography variant="h3">
              {session?.user.expirationTime}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}
