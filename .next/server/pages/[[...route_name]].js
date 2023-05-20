"use strict";
(() => {
var exports = {};
exports.id = 389;
exports.ids = [389];
exports.modules = {

/***/ 838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _route_name_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/layout/Header.js

function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "hero py-4",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row flex-lg-row-reverse align-items-center justify-content-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-6 logo justify-content-center justify-content-lg-end",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/images/SVCClogo.png",
                                    alt: "SVCC Logo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.siliconvalley-codecamp.com/Event/2019",
                                    target: "_blank",
                                    children: "Silicon Valley Code Camp 2019"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-lg-6 date-meta text-center text-lg-start mt-3 mt-lg-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "text-uppercase",
                                children: "October 19-20, 2019"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "text-uppercase",
                                children: "San Jose, California"
                            })
                        ]
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/hooks/useTheme.js

function useTheme() {
    const { 0: darkTheme , 1: setDarkTheme  } = (0,external_react_.useState)(false);
    const toggleTheme = ()=>setDarkTheme(!darkTheme);
    const value = {
        darkTheme,
        toggleTheme
    };
    return value;
}

;// CONCATENATED MODULE: ./src/components/contexts/ThemeContext.js



const ThemeContext = /*#__PURE__*/ (0,external_react_.createContext)({});
const ThemeProvider = ({ children  })=>{
    const value = useTheme();
    return /*#__PURE__*/ jsx_runtime_.jsx(ThemeContext.Provider, {
        value: value,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/components/layout/AppMenu.js



function AppMenu() {
    const { setRoute  } = {
        setRoute: (route)=>{
            window.location.href = route;
        }
    };
    const { toggleTheme  } = (0,external_react_.useContext)(ThemeContext);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "d-flex justify-content-center py-3",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "nav nav-pills gap-1 align-items-center justify-content-start",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>{
                                setRoute("/");
                            },
                            className: "nav-link",
                            children: "Speakers"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>{
                                setRoute("/speakerlist");
                            },
                            className: "nav-link",
                            children: "Speaker List"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>{
                                setRoute("/about");
                            },
                            className: "nav-item nav-link",
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "checkbox",
                                className: "themeToggleCheckbox",
                                autoComplete: "off",
                                id: "themeToggle",
                                defaultChecked: false,
                                onClick: ()=>{
                                    toggleTheme();
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                htmlFor: "themeToggle",
                                className: "themeToggleCheckbox-label",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fas fa-moon"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fas fa-sun"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "ball"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: ./src/components/hooks/useSpeakerModal.js

function useSpeakerModal() {
    const { 0: modalShow , 1: setModalShow  } = (0,external_react_.useState)(false);
    const { 0: modalSpeakerId , 1: setModalSpeakerId  } = (0,external_react_.useState)(0);
    const { 0: modalSpeakerFirstName , 1: setModalSpeakerFirstName  } = (0,external_react_.useState)("");
    const { 0: modalSpeakerLastName , 1: setModalSpeakerLastName  } = (0,external_react_.useState)("");
    const { 0: modalSpeakerImageUrl , 1: setModalSpeakerImageUrl  } = (0,external_react_.useState)("");
    const { 0: modalSpeakerEmail , 1: setModalSpeakerEmail  } = (0,external_react_.useState)("");
    return {
        modalShow,
        setModalShow,
        modalSpeakerId,
        setModalSpeakerId,
        modalSpeakerFirstName,
        setModalSpeakerFirstName,
        modalSpeakerLastName,
        setModalSpeakerLastName,
        modalSpeakerEmail,
        setModalSpeakerEmail,
        modalSpeakerImageUrl,
        setModalSpeakerImageUrl
    };
}
/* harmony default export */ const hooks_useSpeakerModal = (useSpeakerModal);

;// CONCATENATED MODULE: ./src/components/contexts/SpeakerModalContext.js



const SpeakerModalContext = /*#__PURE__*/ (0,external_react_.createContext)({
    modalShow: false,
    setModalShow: ()=>{},
    modalSpeakerId: 0,
    setModalSpeakerId: ()=>{},
    modalSpeakerFirstName: "",
    setModalSpeakerFirstName: ()=>{},
    modalSpeakerLastName: "",
    setModalSpeakerLastName: ()=>{},
    modalSpeakerImageUrl: "",
    setModalSpeakerImageUrl: ()=>{}
});
const SpeakerModalProvider = ({ children  })=>{
    const { modalShow , setModalShow , modalSpeakerId , setModalSpeakerId , modalSpeakerFirstName , setModalSpeakerFirstName , modalSpeakerLastName , setModalSpeakerLastName , modalSpeakerEmail , setModalSpeakerEmail , modalSpeakerImageUrl , setModalSpeakerImageUrl ,  } = hooks_useSpeakerModal();
    const value = {
        modalShow,
        setModalShow,
        modalSpeakerId,
        setModalSpeakerId,
        modalSpeakerFirstName,
        setModalSpeakerFirstName,
        modalSpeakerLastName,
        setModalSpeakerLastName,
        modalSpeakerEmail,
        setModalSpeakerEmail,
        modalSpeakerImageUrl,
        setModalSpeakerImageUrl
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(SpeakerModalContext.Provider, {
        value: value,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/components/speakerModal/SpeakerModalHeader.js



function SpeakersModalHeader() {
    const { setModalShow , modalSpeakerId  } = (0,external_react_.useContext)(SpeakerModalContext);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "modal-header bg-main-gradient text-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                className: "modal-title",
                children: modalSpeakerId === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "Add Speaker"
                }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "Edit Speaker"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                onClick: ()=>{
                    setModalShow(false);
                },
                className: "btn btn-sm text-dark",
                "data-dismiss": "modal",
                "area-label": "close",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fa fa-times"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/speakerModal/SpeakerModalBody.js



function NotesModalBody() {
    const { modalSpeakerId , modalSpeakerFirstName , setModalSpeakerFirstName , modalSpeakerLastName , setModalSpeakerLastName , modalSpeakerImageUrl , setModalSpeakerImageUrl , modalSpeakerEmail , setModalSpeakerEmail ,  } = (0,external_react_.useContext)(SpeakerModalContext);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "modal-body",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "notes-box",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "notes-content",
                children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "note-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            children: "Speaker Id:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: modalSpeakerId
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "note-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            children: "First Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            value: modalSpeakerFirstName,
                                            onChange: (event)=>{
                                                setModalSpeakerFirstName(event.target.value);
                                            },
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "First Name"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "note-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            children: "Last Name"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            value: modalSpeakerLastName,
                                            onChange: (event)=>{
                                                setModalSpeakerLastName(event.target.value);
                                            },
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Last Name"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "note-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            children: "Email"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            value: modalSpeakerEmail,
                                            onChange: (event)=>{
                                                setModalSpeakerEmail(event.target.value);
                                            },
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Email"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "note-title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            children: "Speaker Image URL:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            value: modalSpeakerImageUrl,
                                            onChange: (event)=>{
                                                setModalSpeakerImageUrl(event.target.value);
                                            },
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "https://"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./src/components/hooks/useGeneralizedCrudMethods.js


const LOADING_STATES = [
    "loading",
    "errored",
    "success"
];
function useGeneralizedCrudMethods(url, errorNotificationFn) {
    const { 0: data , 1: setData  } = (0,external_react_.useState)();
    const { 0: error , 1: setError  } = (0,external_react_.useState)();
    const { 0: loadingStatus , 1: setLoadingStatus  } = (0,external_react_.useState)("loading");
    if (!url || url.length === 0) {
        throw "useGeneralizedCrudMethods no url passed in error";
    }
    function formatErrorString(e, url) {
        const errorString = e?.response?.status === 404 ? e?.message + " url " + url : e?.message + e?.response?.data;
        console.log(errorString);
        return errorString;
    }
    (0,external_react_.useEffect)(()=>{
        async function getData() {
            try {
                setLoadingStatus(LOADING_STATES[0]);
                const results = await external_axios_default().get(url);
                setData(results.data);
                setLoadingStatus(LOADING_STATES[2]);
            } catch (e) {
                setError(e);
                setLoadingStatus(LOADING_STATES[1]);
            }
        }
        getData();
    }, [
        url
    ]);
    function createRecord(createObject, callbackDone) {
        // NEED TO HANDLE FAILURE CASE HERE WITH REWIND TO STARTING DATA
        // AND VERIFY createObject has id
        async function addData() {
            const startingData = data.map(function(rec) {
                return {
                    ...rec
                };
            });
            try {
                createObject.id = Math.max(...data.map((o)=>o.id), 0) + 1;
                setData(function(oriState) {
                    return [
                        createObject,
                        ...oriState
                    ];
                });
                await external_axios_default().post(`${url}/${createObject.id}`, createObject);
                if (callbackDone) callbackDone();
            } catch (e) {
                setData(startingData);
                const errorString = formatErrorString(e, url);
                errorNotificationFn?.(errorString);
                if (callbackDone) callbackDone();
            }
        }
        addData();
    }
    function updateRecord(updateObject, callbackDone) {
        const id = updateObject.id; // all speakers must have a column "id"
        async function updateData() {
            //const startingData = [...data]; // FAILS BECAUSE NOT DEEP COPY
            const startingData = data.map(function(rec) {
                return {
                    ...rec
                };
            });
            try {
                setData(function(oriState) {
                    const dataRecord = oriState.find((rec)=>rec.id === id);
                    // only update the fields passed in for the updateObject
                    for (const [key, value] of Object.entries(updateObject)){
                        dataRecord[key] = value === undefined ? dataRecord[key] : value;
                    }
                    return oriState.map((rec)=>rec.id === id ? dataRecord : rec);
                });
                await new Promise((resolve)=>setTimeout(resolve, 2000));
                // get the full record back that has been updated
                const updatedRecord = data.find((rec)=>rec.id === id);
                await external_axios_default().put(`${url}/${id}`, updatedRecord);
                // console.log(`done  call axios.put`);
                if (callbackDone) callbackDone();
            } catch (e) {
                setData(startingData);
                const errorString = formatErrorString(e, url);
                errorNotificationFn?.(errorString);
                if (callbackDone) callbackDone();
            }
        }
        if (data.find((rec)=>rec.id === id)) {
            updateData();
        } else {
            const errorString = `No data record found for id ${id}`;
            errorNotificationFn?.(errorString);
        }
    }
    function deleteRecord(id, callbackDone) {
        async function deleteData() {
            const startingData = data.map(function(rec) {
                return {
                    ...rec
                };
            });
            try {
                setData(function(oriState) {
                    return oriState.filter((rec)=>rec.id != id);
                });
                await external_axios_default()["delete"](`${url}/${id}`);
                if (callbackDone) callbackDone();
            } catch (e) {
                setData(startingData);
                const errorString = formatErrorString(e, url);
                errorNotificationFn?.(errorString);
                if (callbackDone) callbackDone();
            }
        }
        if (data.find((rec)=>rec.id === id)) {
            deleteData();
        } else {
            const errorString = `No data record found for id ${id}`;
            errorNotificationFn?.(errorString);
        }
    }
    return {
        data,
        loadingStatus,
        error,
        createRecord,
        updateRecord,
        deleteRecord
    };
}
/* harmony default export */ const hooks_useGeneralizedCrudMethods = (useGeneralizedCrudMethods);

;// CONCATENATED MODULE: ./src/components/hooks/useSpeakersData.js

function useSpeakersData() {
    const url = "/api/speakers";
    const errorNotificationFn = (error)=>{
        console.log("Error From useSpeakersData", error);
    };
    const { data , error , loadingStatus , createRecord , updateRecord , deleteRecord ,  } = hooks_useGeneralizedCrudMethods(url, errorNotificationFn);
    function createSpeaker(speakerRec, callbackDone) {
        createRecord(speakerRec, callbackDone);
    }
    function updateSpeaker(speakerRec, callbackDone) {
        updateRecord(speakerRec, callbackDone);
    }
    function deleteSpeaker(id, callbackDone) {
        deleteRecord(id, callbackDone);
    }
    return {
        speakerList: data,
        loadingStatus,
        error,
        createSpeaker,
        updateSpeaker,
        deleteSpeaker
    };
}
/* harmony default export */ const hooks_useSpeakersData = (useSpeakersData);

;// CONCATENATED MODULE: ./src/components/contexts/SpeakersDataContext.js



const SpeakersDataContext = /*#__PURE__*/ (0,external_react_.createContext)({
    speakerList: [],
    createSpeaker: ()=>{},
    updateSpeaker: ()=>{},
    deleteSpeaker: ()=>{},
    loadingStatus: ""
});
const SpeakersDataProvider = ({ children  })=>{
    const { speakerList , createSpeaker , updateSpeaker , deleteSpeaker , loadingStatus ,  } = hooks_useSpeakersData();
    const value = {
        speakerList,
        createSpeaker,
        updateSpeaker,
        deleteSpeaker,
        loadingStatus
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(SpeakersDataContext.Provider, {
        value: value,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/components/speakerModal/SpeakerModalFooter.js




function NotesModalFooter() {
    const { setModalShow , modalSpeakerId , modalSpeakerFirstName , modalSpeakerLastName , modalSpeakerEmail , modalSpeakerImageUrl ,  } = (0,external_react_.useContext)(SpeakerModalContext);
    const { data , createSpeaker , updateSpeaker  } = (0,external_react_.useContext)(SpeakersDataContext);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "modal-footer justify-content-center",
        children: [
            modalSpeakerId !== 0 && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>{
                    updateSpeaker({
                        id: modalSpeakerId,
                        firstName: modalSpeakerFirstName,
                        lastName: modalSpeakerLastName,
                        imageUrl: modalSpeakerImageUrl,
                        email: modalSpeakerEmail
                    });
                    setModalShow(false);
                },
                className: "float-left btn btn-accent",
                children: "Save"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "btn btn-danger",
                onClick: ()=>{
                    setModalShow(false);
                },
                "data-dismiss": "modal",
                children: "Discard"
            }),
            modalSpeakerId === 0 && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "btn btn-accent",
                onClick: ()=>{
                    createSpeaker({
                        firstName: modalSpeakerFirstName,
                        lastName: modalSpeakerLastName,
                        email: modalSpeakerEmail,
                        imageUrl: modalSpeakerImageUrl,
                        sat: true,
                        sun: true,
                        favorite: false,
                        company: "Code Camp",
                        twitterHandle: "unknown",
                        userBioShort: "Dummy Bio",
                        bio: "Dummy Bio"
                    });
                    setModalShow(false);
                },
                children: "Add"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/speakerModal/SpeakerModal.js







function SpeakerModal() {
    const { modalShow  } = (0,external_react_.useContext)(SpeakerModalContext);
    const cssShowHide = modalShow && modalShow === true ? "modal show-modal has-backdrop" : "modal hide-modal";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx((style_default()), {
                id: "83dff6df0c3d3f53",
                children: '.show-modal.jsx-83dff6df0c3d3f53{display:block}.has-backdrop.jsx-83dff6df0c3d3f53:before{content:"";background:rgb(24 26 29/77%);position:absolute;height:100%;width:100%;left:0;top:0;margin:0;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.hide-modal.jsx-83dff6df0c3d3f53{display:none}'
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                role: "dialog",
                className: "jsx-83dff6df0c3d3f53" + " " + (cssShowHide || ""),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "jsx-83dff6df0c3d3f53" + " " + "modal-dialog modal-dialog-centered",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            backgroundColor: "#EEEEEE"
                        },
                        className: "jsx-83dff6df0c3d3f53" + " " + "modal-content border-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SpeakersModalHeader, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(NotesModalBody, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(NotesModalFooter, {})
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/speakers/AddSpeakerDialog.js




function AddSpeakerDialog() {
    const { setModalShow , setModalSpeakerId , setModalSpeakerFirstName , setModalSpeakerLastName , setModalSpeakerEmail , setModalSpeakerImageUrl ,  } = (0,external_react_.useContext)(SpeakerModalContext);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SpeakerModal, {
                modalShow: false
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                onClick: ()=>{
                    setModalSpeakerId(0);
                    setModalSpeakerFirstName("");
                    setModalSpeakerLastName("");
                    setModalSpeakerEmail("");
                    setModalSpeakerImageUrl("/images/Speaker-New.jpg");
                    setModalShow(true);
                },
                className: "btn btn-accent",
                children: [
                    "Add Speaker ",
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fa fa-plus"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/contexts/SpeakerMenuContext.js


const SpeakerMenuContext = /*#__PURE__*/ (0,external_react_.createContext)({
    speakingSaturday: true,
    setSpeakingSaturday: ()=>{},
    speakingSunday: true,
    setSpeakingSunday: ()=>{},
    searchText: "",
    setSearchText: ()=>{}
});
const SpeakerMenuProvider = ({ children  })=>{
    const { 0: speakingSaturday , 1: setSpeakingSaturday  } = (0,external_react_.useState)(true);
    const { 0: speakingSunday , 1: setSpeakingSunday  } = (0,external_react_.useState)(true);
    const { 0: searchText , 1: setSearchText  } = (0,external_react_.useState)("");
    const value = {
        //updating,
        //setUpdating,
        speakingSaturday,
        setSpeakingSaturday,
        speakingSunday,
        setSpeakingSunday,
        searchText,
        setSearchText
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(SpeakerMenuContext.Provider, {
        value: value,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/components/speakers/SpeakerMenu.js





function SpeakerMenu() {
    const { speakingSaturday , setSpeakingSaturday , speakingSunday , setSpeakingSunday , searchText , setSearchText ,  } = (0,external_react_.useContext)(SpeakerMenuContext);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "btn-toolbar",
        role: "toolbar",
        "aria-label": "Speaker toolbar filter",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "toolbar-trigger mb-3",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "toolbar-search",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        value: searchText,
                        onChange: (event)=>{
                            setSearchText(event.target.value);
                        },
                        type: "text",
                        className: "form-control",
                        placeholder: "Search"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "form-check-inline",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: "form-check-label",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "checkbox",
                                className: "form-check-input",
                                onChange: ()=>{
                                    setSpeakingSaturday(!speakingSaturday);
                                },
                                checked: speakingSaturday
                            }),
                            "Saturday Speakers"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "form-check-inline",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        className: "form-check-label",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "checkbox",
                                className: "form-check-input",
                                onChange: ()=>{
                                    setSpeakingSunday(!speakingSunday);
                                },
                                checked: speakingSunday
                            }),
                            "Sunday Speakers"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "input-group",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SpeakerModalProvider, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(AddSpeakerDialog, {})
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/speakers/DeleteSpeakerButton.js



function DeleteSpeakerButton({ id  }) {
    const { deleteSpeaker  } = (0,external_react_.useContext)(SpeakersDataContext);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        onClick: (e)=>{
            e.preventDefault();
            const confirmed = confirm("Are you sure you want to delete this speaker?");
            if (confirmed) {
                deleteSpeaker(id);
            }
        },
        className: "btn btn-danger btn-sm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: "fa fa-trash"
            }),
            " Delete "
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/speakers/EditSpeakerDialog.js



function EditSpeakerDialog({ id , firstName , lastName , email , imageUrl ,  }) {
    const { setModalShow , modalShow , modalSpeakerId , setModalSpeakerId , modalSpeakerFirstName , setModalSpeakerFirstName , modalSpeakerLastName , setModalSpeakerLastName , modalSpeakerEmail , setModalSpeakerEmail , modalSpeakerImageUrl , setModalSpeakerImageUrl ,  } = (0,external_react_.useContext)(SpeakerModalContext);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        onClick: (e)=>{
            e.preventDefault();
            setModalSpeakerId(id);
            setModalSpeakerFirstName(firstName);
            setModalSpeakerLastName(lastName);
            setModalSpeakerImageUrl(imageUrl);
            setModalSpeakerEmail(email);
            setModalShow(true);
        },
        className: "btn btn-accent btn-sm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: "fa fa-edit"
            }),
            " Edit "
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/speakers/FavoriteSpeakerToggle.js



function FavoriteSpeakerToggle({ speakerRec  }) {
    const { updateSpeaker  } = (0,external_react_.useContext)(SpeakersDataContext);
    const { 0: updating , 1: setUpdating  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: speakerRec.favorite ? "heartredbutton btn" : "heartdarkbutton btn",
        onClick: (e)=>{
            e.preventDefault();
            const newSpeakerRec = {
                ...speakerRec,
                favorite: !speakerRec.favorite
            };
            setUpdating(true);
            updateSpeaker(newSpeakerRec, ()=>{
                setUpdating(false);
            });
        },
        children: updating ? /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "spinner-border text-dark",
            role: "status"
        }) : null
    });
}

;// CONCATENATED MODULE: ./src/components/speakers/SpeakerImageToggleOnScroll.js



function SpeakerImageToggleOnScroll({ imageUrl , alt , thumbNail ,  }) {
    const { 0: inView , 1: setInView  } = (0,external_react_.useState)(false);
    const imageRef = (0,external_react_.useRef)(null);
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(true);
    const { speakingSaturday , speakingSunday , searchText  } = (0,external_react_.useContext)(SpeakerMenuContext);
    function scrollHandler() {
        setInView(isInView());
    }
    (0,external_react_.useEffect)(()=>{
        setInView(isInView());
        setIsLoading(false);
        window.addEventListener("scroll", scrollHandler);
        return ()=>{
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [
        speakingSaturday,
        speakingSunday,
        searchText
    ]);
    function isInView() {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    const grayScale = inView ? "grayscale(0%)" : "grayscale(100%)";
    const gif1x1Transparent = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    return /*#__PURE__*/ jsx_runtime_.jsx("img", {
        src: isLoading ? gif1x1Transparent : imageUrl,
        alt: alt,
        width: thumbNail ? 50 : 200,
        height: thumbNail ? 50 : 200,
        className: thumbNail ? "img-fluid rounded-start " : "img-fluid rounded-start speaker-image",
        style: {
            filter: `${grayScale}`
        },
        ref: imageRef
    });
}

;// CONCATENATED MODULE: ./src/components/speakers/SpeakerDetail.js







function SpeakerDetail({ speakerRec , showDetails  }) {
    const { setRoute  } = {
        setRoute: (route)=>{
            window.location.href = route;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SpeakerModalProvider, {
        children: [
            speakerRec && /*#__PURE__*/ jsx_runtime_.jsx(SpeakerModal, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-xl-6 col-md-12",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "card border-0",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row g-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(SpeakerImageToggleOnScroll, {
                                    imageUrl: speakerRec?.imageUrl,
                                    alt: `${speakerRec?.firstName} ${speakerRec?.lastName}`,
                                    thumbNail: false
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-8 d-flex flex-column flex-nowrap",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "card-body",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "speaker-action d-flex",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "favoriteToggleWrapper",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(FavoriteSpeakerToggle, {
                                                            speakerRec: speakerRec
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "modifyWrapper",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(EditSpeakerDialog, {
                                                                ...speakerRec
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(DeleteSpeakerButton, {
                                                                id: speakerRec.id
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "card-title",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    onClick: ()=>{
                                                        setRoute(`/speaker/${speakerRec.id}`);
                                                    },
                                                    href: "#",
                                                    children: [
                                                        speakerRec.firstName,
                                                        " ",
                                                        speakerRec.lastName
                                                    ]
                                                })
                                            }),
                                            showDetails === true ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "card-text",
                                                children: speakerRec.bio
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "card-text",
                                                children: speakerRec.userBioShort
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "card-footer text-muted d-flex flex-wrap justify-content-between align-items-center",
                                        children: [
                                            speakerRec?.company?.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                        children: "Company:"
                                                    }),
                                                    " ",
                                                    speakerRec.company
                                                ]
                                            }) : null,
                                            speakerRec.twitterHandle.length > 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                        children: "Twitter"
                                                    }),
                                                    ": ",
                                                    speakerRec.twitterHandle
                                                ]
                                            }) : null
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/hooks/useSpeakerSortAndFilter.js
function useSpeakerSortAndFilter(speakerList, speakingSaturday, speakingSunday, searchText) {
    console.log("useSpeakerSortAndFilter called");
    return speakerList ? speakerList.filter(({ sat , sun  })=>speakingSaturday && sat || speakingSunday && sun).filter(({ firstName , lastName  })=>{
        return searchText.length === 0 || (firstName?.toLowerCase() + lastName?.toLowerCase()).includes(searchText.toLowerCase());
    }).sort(function(a, b) {
        if (a.firstName < b.firstName) {
            return -1;
        }
        if (a.firstName > b.firstName) {
            return 1;
        }
        return 0;
    }) : [];
}

;// CONCATENATED MODULE: ./src/components/speakers/SpeakersList.js






function SpeakersList() {
    const { speakerList , loadingStatus  } = (0,external_react_.useContext)(SpeakersDataContext);
    const { speakingSaturday , speakingSunday , searchText  } = (0,external_react_.useContext)(SpeakerMenuContext);
    const speakerListJson = JSON.stringify(speakerList);
    const speakerListFiltered = (0,external_react_.useMemo)(()=>useSpeakerSortAndFilter(speakerList, speakingSaturday, speakingSunday, searchText), [
        speakingSaturday,
        speakingSunday,
        searchText,
        loadingStatus,
        speakerListJson
    ]);
    if (loadingStatus === "loading") {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "card",
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: speakerListFiltered.map(function(speakerRec) {
            return /*#__PURE__*/ jsx_runtime_.jsx(SpeakerDetail, {
                speakerRec: speakerRec,
                showDetails: false
            }, speakerRec.id);
        })
    });
}

;// CONCATENATED MODULE: ./src/components/speakers/Speakers.js







function Speakers() {
    const { darkTheme  } = (0,external_react_.useContext)(ThemeContext);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: darkTheme ? "theme-dark" : "theme-light",
        children: /*#__PURE__*/ jsx_runtime_.jsx(SpeakersDataProvider, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SpeakerMenuProvider, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SpeakerMenu, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row g-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(SpeakersList, {})
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const speakers_Speakers = (Speakers);

;// CONCATENATED MODULE: ./src/components/about/About.js



function About() {
    const { darkTheme  } = (0,external_react_.useContext)(ThemeContext);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: darkTheme ? "theme-dark" : "theme-light",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "content",
                className: "content-wrapper",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "about",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: "hTitle",
                            children: "About"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "card border-0 p-3",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "card-body",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "card-text",
                                    children: [
                                        "Silicon Valley Code Camp is put on by a dedicated group of volunteers whose mission is to both provide the highest quality content built around the topic of computer code, as well as create an environment where shared knowledge is paramount.",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "The volunteers not only include the organizers, but all the speakers in Addition!!"
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/speakers/Speaker.js





function Inner({ id  }) {
    const { darkTheme  } = (0,external_react_.useContext)(ThemeContext);
    const { speakerList , loadingStatus  } = (0,external_react_.useContext)(SpeakersDataContext);
    if (loadingStatus === "loading") return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading..."
    });
    const speakerRec = speakerList?.find((rec)=>rec.id === id);
    return speakerRec ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: darkTheme ? "theme-dark" : "theme-light",
        children: /*#__PURE__*/ jsx_runtime_.jsx(SpeakerDetail, {
            speakerRec: speakerRec,
            showDetails: true
        })
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
        className: "text-danger",
        children: [
            "Speaker ",
            id,
            " not found"
        ]
    });
}
function Speaker(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(SpeakersDataProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Inner, {
            ...props
        })
    });
}

;// CONCATENATED MODULE: ./src/components/speakers/FavoriteSpeakerToggleLine.js

function FavoriteSpeakerToggleLine({ speakerRec , toggleFavoriteSpeaker , children ,  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: speakerRec.favorite ? "heartredbutton btn" : "heartdarkbutton btn",
        onClick: toggleFavoriteSpeaker,
        children: children
    });
}

;// CONCATENATED MODULE: ./src/components/speakers/SpeakerLine.js




const SpeakerLine = /*#__PURE__*/ (0,external_react_.memo)(({ speakerRec , toggleFavoriteSpeaker , updating , highlight  })=>{
    console.log(`SpeakerLine: speaker: ${speakerRec.lastName}`);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "col-xl-12 col-md-12",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "card border-0 speaker-list",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "card-body p-0",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-flex align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-shrink-0",
                            children: speakerRec?.imageUrl ? /*#__PURE__*/ jsx_runtime_.jsx(SpeakerImageToggleOnScroll, {
                                imageUrl: speakerRec?.imageUrl,
                                alt: `${speakerRec?.firstName} ${speakerRec?.lastName}`,
                                thumbNail: true
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "blue-box-background"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-grow-1 ms-3 me-5",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "list-group",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "d-flex w-100 justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                className: highlight === true ? "mb-1 background-text-highlight" : "mb-1",
                                                children: [
                                                    speakerRec.firstName,
                                                    " ",
                                                    speakerRec.lastName
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "spinner-bottom",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(FavoriteSpeakerToggleLine, {
                                                    speakerRec: speakerRec,
                                                    toggleFavoriteSpeaker: toggleFavoriteSpeaker,
                                                    children: updating ? /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "spinner-border text-dark",
                                                        role: "status"
                                                    }) : null
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                                        className: "text-muted",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                children: "Company: "
                                            }),
                                            " ",
                                            speakerRec.company
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
});
/* harmony default export */ const speakers_SpeakerLine = (SpeakerLine);

;// CONCATENATED MODULE: ./src/components/speakers/SpeakerList.js





function List({ state , dispatch  }) {
    const { 0: updatingId , 1: setUpdatingId  } = (0,external_react_.useState)(0);
    const { 0: searchName , 1: setSearchName  } = (0,external_react_.useState)("");
    const { 0: highlightChars , 1: setHighlightChars  } = (0,external_react_.useState)();
    const { 0: isPending , 1: startTransition  } = (0,external_react_.useTransition)();
    const speakers1 = state.speakers;
    function toggleFavoriteSpeaker(speakerRec) {
        const speakerRecUpdated = {
            ...speakerRec,
            favorite: !speakerRec.favorite
        };
        dispatch({
            type: "updateSpeaker",
            speaker: speakerRecUpdated
        });
        async function updateAsync(rec) {
            setUpdatingId(rec.id);
            await external_axios_default().put(`/api/speakers/${rec.id}`, speakerRecUpdated);
            setUpdatingId(0);
        }
        updateAsync(speakerRecUpdated);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "btn-toolbar",
                    role: "toolbar",
                    "aria-label": "Speaker toolbar filter",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "toolbar-trigger mb-3 flex-grow-04",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "toolbar-search w-100",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    value: searchName,
                                    onChange: (event)=>{
                                        setSearchName(event.target.value);
                                        startTransition(()=>{
                                            setHighlightChars(event.target.value);
                                        });
                                    },
                                    type: "text",
                                    className: "form-control",
                                    placeholder: "Highlight Names"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "spinner-height",
                                children: isPending && /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "spinner-border text-dark",
                                    role: "status"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row g-3",
                children: speakers1.map(function(speakerRec) {
                    const highlight = highlightChars?.length > 0 && (speakerRec.firstName?.toLowerCase() + speakerRec.lastName?.toLowerCase()).includes(highlightChars.toLowerCase()) ? true : false;
                    return /*#__PURE__*/ jsx_runtime_.jsx(speakers_SpeakerLine, {
                        speakerRec: speakerRec,
                        updating: updatingId === speakerRec.id ? updatingId : 0,
                        toggleFavoriteSpeaker: (0,external_react_.useCallback)(()=>toggleFavoriteSpeaker(speakerRec), [
                            speakerRec.favorite
                        ]),
                        highlight: highlight
                    }, speakerRec.id);
                })
            })
        ]
    });
}
const SpeakerList = ()=>{
    const { darkTheme  } = (0,external_react_.useContext)(ThemeContext);
    function reducer(state, action) {
        switch(action.type){
            case "speakersLoaded":
                return {
                    ...state,
                    loading: false,
                    speakers: [
                        ...action.speakers,
                        ...createDummySpeakers(8000)
                    ]
                };
            case "setLoadingStatus":
                return {
                    ...state,
                    loading: true
                };
            case "updateSpeaker":
                const speakersUpdated = state.speakers.map((rec)=>action.speaker.id === rec.id ? action.speaker : rec);
                return {
                    ...state,
                    speakers: speakersUpdated
                };
            default:
                throw new Error(`case failure.  type: ${action.type}`);
        }
    }
    const initialState = {
        speakers: [],
        loading: true,
        updateItem: ()=>{}
    };
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(reducer, initialState);
    (0,external_react_.useEffect)(()=>{
        async function getDataAsync() {
            dispatch({
                type: "setLoadingStatus"
            });
            const results = await external_axios_default().get("/api/speakers");
            dispatch({
                type: "speakersLoaded",
                speakers: results.data
            });
        }
        getDataAsync();
    }, []);
    function updateSpeaker(speakerRec) {
        const speakerUpdated = speakers.map(function(rec) {
            return speakerRec.id === rec.id ? speakerRec : rec;
        });
        setSpeakers(speakerUpdated);
    }
    if (state.loading) return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading..."
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: darkTheme ? "theme-dark" : "theme-light",
        children: /*#__PURE__*/ jsx_runtime_.jsx(List, {
            state: state,
            dispatch: dispatch
        })
    });
};
/* harmony default export */ const speakers_SpeakerList = (SpeakerList);
function createDummySpeakers(numToAdd) {
    let speakers1 = [];
    for(let increment = 1; increment < numToAdd; increment++){
        speakers1.push({
            id: 100000 + increment,
            firstName: `Craig${increment}`,
            lastName: `Mantle${increment}`,
            favorite: false,
            bio: "fake bio",
            company: "fake company",
            twitterHandle: `fakeTwitterHandle${increment}`,
            userBioShort: `fake short bio ${increment}`,
            imageUrl: "",
            email: `FakeEmail${increment}@codecamp.net`
        });
    }
    return speakers1;
}

;// CONCATENATED MODULE: ./src/components/layout/Layout.js








// Layout does not use children but instead uses what comes from AppRouteProvider
function Layout({ url  }) {
    const speakerId = parseInt(url.substring(9).replace("#", ""));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ThemeProvider, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(AppMenu, {}),
            url === "/about" && /*#__PURE__*/ jsx_runtime_.jsx(About, {}),
            url === "/" && /*#__PURE__*/ jsx_runtime_.jsx(speakers_Speakers, {}),
            url.startsWith("/speaker/") && /*#__PURE__*/ jsx_runtime_.jsx(Speaker, {
                id: speakerId
            }),
            url.startsWith("/speakerlist") && /*#__PURE__*/ jsx_runtime_.jsx(speakers_SpeakerList, {})
        ]
    });
}

;// CONCATENATED MODULE: ./src/App.js


const App = ({ url  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        url: url
    });
};
/* harmony default export */ const src_App = (App);

;// CONCATENATED MODULE: ./pages/[[...route_name]].js


function index({ url  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(src_App, {
        url: url
    });
}
async function getServerSideProps(context) {
    return {
        props: {
            url: context.resolvedUrl
        }
    };
}
/* harmony default export */ const _route_name_ = (index);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(838));
module.exports = __webpack_exports__;

})();