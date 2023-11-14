import Link from "./Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Nav() {
    return (
        <Typography variant="h4" gutterBottom>
            <Link href="/next">
                <Button variant="outlined" component="am">账户管理</Button>
            </Link>
            <Link href="/bussinessManagement">
                <Button variant="outlined" component="bm">业务管理</Button>
            </Link>
            <Link href="/next">
                <Button variant="outlined" component="pm">项目管理</Button>
            </Link>
            <Link href="/next">
                <Button variant="outlined" component="c">CRM</Button>
            </Link>
            <Link href="/next">
                <Button variant="outlined" component="gm">货品管理</Button>
            </Link>
            <Link href="/next">
                <Button variant="outlined" component="mp">帐款管理</Button>
            </Link>
            <Link href="/next">
                <Button variant="outlined" component="plm">平台管理</Button>
            </Link>
            <Link href="/next">
                <Button variant="outlined" component="ss">系统设置</Button>
            </Link>
        </Typography>
    )
}