"use client";
import Image from "next/image";
import { Tooltip } from "@mui/material";
import React, { useEffect } from "react";
import { DownloadButton } from "./styled";
import DownloadIcon from "@mui/icons-material/Download";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { DocumentGetFile } from "../../redux/feauture/documents/getFile/request";

const Index = () => {
    const dispatch = useAppDispatch();
    const documentoSelector = useAppSelector((state) => state.getFile);

    useEffect(() => {
        dispatch(
            DocumentGetFile(
                "Documentos/solicitud/23/primeraEtapa/ffbd5b5a-f473-455e-87dc-40b0572b1a9c-cover.png"
            )
        );
    }, [dispatch]);

    return (
        <>
            <h1>Prueba</h1>
            {documentoSelector.data.data && (
                <div style={{ display: "flex", backgroundColor: "gray" }}>
                    <Image
                        src={documentoSelector.data.data}
                        alt="imagen"
                        width={500}
                        height={300}
                        unoptimized
                    />
                    <DownloadButton
                        as="a"
                        href={documentoSelector.data.data}
                        style={{
                            color: "#dcdcde",
                            border: "1px solid",
                        }}
                    >
                        <Tooltip title="Descargar archivo" placement="top">
                            <DownloadIcon sx={{ color: "#f95e21" }} />
                        </Tooltip>
                    </DownloadButton>
                </div>
            )}
        </>
    );
};

export default Index;
