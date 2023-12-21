var count = 0;
var correct_connections = [
  ["VM1L", "THY1L"],
  ["VM1R", "THY1R"],
  ["THY1RB", "GTP1R"],
  ["AM1L", "THY1R"],
  ["AM1R", "R1T"],
  ["VM4T", "AM1R"],
  ["VM4B", "I1B"],
  ["R1B", "I1T"],
  ["VM2R", "GND1"],
  ["VM2L", "GTP1R"],
  ["AC1T", "THY1L"],
  ["VM3T", "THY1L"],
  ["VM3B", "I1B"],
  ["AC1B", "I1B"],
];

var voltagemids = ["VM4-back", "VM3-back", "VM2-back", "VM1-back"];
var thyids = ["THY1-back"];
var amids = ["AM1-back"];
var gtpids = ["GTP1-back"];
var gndids = ["GND1-back"];
var acids = ["AC1-back"];
var rids = ["R1-back"];
var indids = ["I1-back"];
var values = {
  R1: {
    name: "Resistor",
    value: 0,
    type: "Resistance: ",
    unit: " Ω",
  },

  I1: {
    name: "Inductor",
    value: 0,
    type: "Inductance: ",
    unit: "mH",
  },
  DC1: { name: "DC", value: 0, type: "Voltage: ", unit: "volt" },
  AC1: {
    name: "AC",
    volt: 0,
    freq: 0,
    type1: "Voltage: ",
    type2: "Frequency: ",
    unitfreq: " Hz",
    unit: "V",
  },
  AC2: {
    name: "TRI",
    volt: 0,
    freq: 0,
    type1: "Voltage: ",
    type: "Frequency: ",
    unitfreq: " Hz",
    unit: " volt",
  },
  M1: {
    name: "M1",
  },
  M2: {
    name: "M2",
  },
  VM1: {
    name: "Thyristor Voltage",
  },
  VM2: {
    name: "Gate Pulse",
  },
  GND1: {
    name: "GND",
  },
  GND2: {
    name: "GND2",
  },
  AM1: {
    name: "Load Current",
  },
  THY1: { name: "Thyristor" },

  GTP1: {
    name: "Gate Pulse",
    sfire: 0,
    efire: 0,
    type1: "Frequency: ",
    type2: "Fire Angle: ",
    unitfreq: " Hz",
    unit: "\u00B0",
  },

  VM3: { name: "Input Voltage" },
  M3: { name: "M3" },
  M4: { name: "M4" },
  VM4: { name: "Load Voltage" },
  VM5: { name: "Load Voltage" },
  S1: { name: "S1" },
  GND3: { name: "GND3" },
  GND4: { name: "GND4" },
  VM5: { name: "VSINE" },
  S2: { name: "S2" },
  G2: { name: "G2" },
  opamp1: { name: "Comparator" },
  VM6: { name: "VM6" },
  GND5: { name: "GND5" },
  // VM7: { name: "VTRI" },
  GND6: { name: "GND5" },
  GND7: { name: "GND6" },
  vavg: 0,
  iavg: 0,
  vrms: 0,
  irms: 0,
};
var endpoints = {};
var user_connection = [];
var endpoints_display = [];
var wrong_connection = [];
var correct_connections_flag = false;

var instance = jsPlumb.getInstance({
  ConnectionsDetachable: false,
  Container: "body",
});
instance.bind("ready", () => {
  $("#symbolpalette .ele-img").draggable({
    helper: "clone",
    containment: "body",
    appendTo: "#diagram",
  });
  $("#diagram").droppable({
    drop: (event, ui) => {
      if ($(ui.helper).hasClass("resistor-sym")) {
        var a = rids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("thy-sym")) {
        var a = thyids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("ac-sym")) {
        var a = acids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("ind-sym")) {
        var a = indids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("gate-sym")) {
        var a = gtpids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("volt-sym")) {
        var a = voltagemids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      } else if ($(ui.helper).hasClass("gnd-sym")) {
        var a = gndids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        }
      } else if ($(ui.helper).hasClass("am-sym")) {
        var a = amids.pop();
        if (a != null) {
          document.getElementById(a).style.visibility = "unset";
          createParticularEnd(a.split("-")[0]);
          endpoints_display.push(a.split("-")[0]);
        } else {
        }
      }
    },
  });
  function createParticularEnd(element_name) {
    var stokwid = "3.5";
    if (element_name == "VM1") {
      var VM1L = instance.addEndpoint("VM1L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM1L"] = VM1L;

      var VM1R = instance.addEndpoint("VM1R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM1R"] = VM1R;
    }
    if (element_name == "VM2") {
      var VM2L = instance.addEndpoint("VM2L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM2L"] = VM2L;

      var VM2R = instance.addEndpoint("VM2R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM2R"] = VM2R;
    }
    if (element_name == "VM3") {
      var VM3T = instance.addEndpoint("VM3T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM3T"] = VM3T;

      var VM3B = instance.addEndpoint("VM3B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM3B"] = VM3B;
    }
    if (element_name == "VM4") {
      var VM4T = instance.addEndpoint("VM4T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM4T"] = VM4T;

      var VM4B = instance.addEndpoint("VM4B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["VM4B"] = VM4B;
    }
    if (element_name == "THY1") {
      var THY1R = instance.addEndpoint("THY1R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["THY1R"] = THY1R;

      var THY1RB = instance.addEndpoint("THY1RB", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["THY1RB"] = THY1RB;

      var THY1L = instance.addEndpoint("THY1L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 3,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["THY1L"] = THY1L;
    }
    if (element_name == "AM1") {
      var AM1L = instance.addEndpoint("AM1L", {
        anchor: ["Left"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["AM1L"] = AM1L;

      var AM1R = instance.addEndpoint("AM1R", {
        anchor: ["Right"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["AM1R"] = AM1R;
    }
    if (element_name == "GTP1") {
      var GTP1R = instance.addEndpoint("GTP1R", {
        anchor: ["Center"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 2,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["GTP1R"] = GTP1R;
    }
    if (element_name == "GND1") {
      var GND1 = instance.addEndpoint("GND1", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["GND1"] = GND1;
    }
    if (element_name == "AC1") {
      var AC1T = instance.addEndpoint("AC1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["AC1T"] = AC1T;

      var AC1B = instance.addEndpoint("AC1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["AC1B"] = AC1B;
    }
    if (element_name == "R1") {
      var R1T = instance.addEndpoint("R1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R1T"] = R1T;

      var R1B = instance.addEndpoint("R1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["R1B"] = R1B;
    }
    if (element_name == "I1") {
  
      var I1T = instance.addEndpoint("I1T", {
        anchor: ["Top"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 1,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["I1T"] = I1T;

      var I1B = instance.addEndpoint("I1B", {
        anchor: ["Bottom"],
        isSource: true,
        isTarget: true,
        connector: "Flowchart",
        maxConnections: 3,
        connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
        paintStyle: { fillStyle: "red" },
      });
      endpoints["I1B"] = I1B;
    }
  }
  //if (component.hasClass("jtk-connector"))
  function createEnd() {
    var stokwid = "3.5";
    if (endpoints_display.indexOf("VM1") !== -1) {

    var VM1L = instance.addEndpoint("VM1L", {
      anchor: ["Left"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["VM1L"] = VM1L;

    var VM1R = instance.addEndpoint("VM1R", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["VM1R"] = VM1R;
  }
  if (endpoints_display.indexOf("VM2") !== -1) {

    var VM2L = instance.addEndpoint("VM2L", {
      anchor: ["Left"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["VM2L"] = VM2L;

    var VM2R = instance.addEndpoint("VM2R", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["VM2R"] = VM2R;
  }
  if (endpoints_display.indexOf("VM3") !== -1) {

    var VM3T = instance.addEndpoint("VM3T", {
      anchor: ["Top"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["VM3T"] = VM3T;

    var VM3B = instance.addEndpoint("VM3B", {
      anchor: ["Bottom"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["VM3B"] = VM3B;
  }
  if (endpoints_display.indexOf("VM4") !== -1) {

    var VM4T = instance.addEndpoint("VM4T", {
      anchor: ["Top"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["VM4T"] = VM4T;

    var VM4B = instance.addEndpoint("VM4B", {
      anchor: ["Bottom"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["VM4B"] = VM4B;
  }
  if (endpoints_display.indexOf("THY1") !== -1) {

    var THY1R = instance.addEndpoint("THY1R", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["THY1R"] = THY1R;

    var THY1RB = instance.addEndpoint("THY1RB", {
      anchor: ["Bottom"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["THY1RB"] = THY1RB;

    var THY1L = instance.addEndpoint("THY1L", {
      anchor: ["Left"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 3,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["THY1L"] = THY1L;
  }
  if (endpoints_display.indexOf("AM1") !== -1) {

    var AM1L = instance.addEndpoint("AM1L", {
      anchor: ["Left"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["AM1L"] = AM1L;

    var AM1R = instance.addEndpoint("AM1R", {
      anchor: ["Right"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["AM1R"] = AM1R;
  }
  if (endpoints_display.indexOf("GTP1") !== -1) {

    var GTP1R = instance.addEndpoint("GTP1R", {
      anchor: ["Center"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 2,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["GTP1R"] = GTP1R;
  }
  if (endpoints_display.indexOf("GND1") !== -1) {

    var GND1 = instance.addEndpoint("GND1", {
      anchor: ["Top"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["GND1"] = GND1;
  }
  if (endpoints_display.indexOf("AC1") !== -1) {

    var AC1T = instance.addEndpoint("AC1T", {
      anchor: ["Top"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["AC1T"] = AC1T;

    var AC1B = instance.addEndpoint("AC1B", {
      anchor: ["Bottom"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["AC1B"] = AC1B;
  }
  if (endpoints_display.indexOf("R1") !== -1) {

    var R1T = instance.addEndpoint("R1T", {
      anchor: ["Top"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["R1T"] = R1T;

    var R1B = instance.addEndpoint("R1B", {
      anchor: ["Bottom"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["R1B"] = R1B;
  }
  if (endpoints_display.indexOf("I1") !== -1) {

    var I1T = instance.addEndpoint("I1T", {
      anchor: ["Top"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 1,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["I1T"] = I1T;

    var I1B = instance.addEndpoint("I1B", {
      anchor: ["Bottom"],
      isSource: true,
      isTarget: true,
      connector: "Flowchart",
      maxConnections: 3,
      connectorStyle: { strokeWidth: stokwid, stroke: "#100" },
      paintStyle: { fillStyle: "red" },
    });
    endpoints["I1B"] = I1B;
  }}

  window.addEventListener("resize", () => {
    instance.repaintEverything();
    if (correct_connections_flag) {
      plotData();
    }
  });

  instance.bind("connection", (conn, event) => {
    var flag = true;
    let eg1 = [String(conn.sourceId), String(conn.targetId)];

    for (var ele of correct_connections) {
      if (
        (ele[0] == eg1[0] && ele[1] == eg1[1]) ||
        (ele[0] == eg1[1] && ele[1] == eg1[0])
      ) {
        flag = false;

        user_connection.push(eg1);

        break;
      }
    }
    if (flag) {
      conn.connection._jsPlumb.paintStyleInUse.stroke = "red";
      wrong_connection.push(eg1);
      openPopup("new-img/404-error.png", "Wrong Connection", "28px");
    }
  });
  function detach(a) {
    instance.deleteConnection(a);
  }
  instance.bind("click", function (conn) {
    let eg1 = [String(conn.sourceId), String(conn.targetId)];

    if (!correct_connections_flag) {
      for (var ele of correct_connections) {
        if (
          (ele[0] == eg1[0] && ele[1] == eg1[1]) ||
          (ele[0] == eg1[1] && ele[1] == eg1[0])
        ) {
          user_connection.pop(eg1);
          break;
        }
      }
      for (var ele of wrong_connection) {
        if (
          (ele[0] == eg1[0] && ele[1] == eg1[1]) ||
          (ele[0] == eg1[1] && ele[1] == eg1[0])
        ) {
          wrong_connection.pop(eg1);
          break;
        }
      }

      instance.deleteConnection(conn);
    }

    return false;
  });
  $("body").on("contextmenu", "#components", (event) => {
    event.preventDefault();
  });

  $("body").on("contextmenu", "#diagram .resistor", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" maxlength="5" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Resistance:</label><input type="number" class="set-input" placeholder=" ' +
          values[window.selectedControl]["value"] +
          ' &Omega;" min="1" max="100"  id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" maxlength="5" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Resistance:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["value"] +
          ' &Omega;" min="1" max="100"  disabled id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

  //context menu for inductor

  $("body").on("contextmenu", "#diagram .inductor", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" maxlength="5" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Inductance:</label><input type="number" class="set-input" placeholder=" ' +
          values[window.selectedControl]["value"] +
          ' mH" min="1" max="100"  id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="dcSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" maxlength="5" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-' +
          window.selectedControl +
          '">Inductance:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["value"] +
          ' mH" min="1" max="100"  disabled id="value-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

  // Thyristor
  $("body").on("contextmenu", "#diagram .acsource", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="acSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label style="color:white;" for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Amplitude:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["volt"] +
          ' Volt" min="1" max="350"  id="value-volt-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          ' Hz" min="10" max="60"  id="value-freq-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="acSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-volt-' +
          window.selectedControl +
          '">Amplitude:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["volt"] +
          ' Volt" min="1" max="100" disabled id="value-volt-' +
          window.selectedControl +
          '" /> </div><div class="value-element" style="display: flex; align-items: center; "><label for="value-freq-' +
          window.selectedControl +
          '">Frequency:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["freq"] +
          ' Hz" min="10" max="60" disabled id="value-freq-' +
          window.selectedControl +
          '" /> </div><div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

  $("body").on("contextmenu", "#diagram .other", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    $(
      '<div class="custom-menu"><div class="name-element"><div style="display: flex; justify-content: end;position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn"></button></div><label for="name-' +
        window.selectedControl +
        '">Name:</label><input type="text" maxlength="5" id="name-' +
        window.selectedControl +
        '" class="set-input-name" placeholder="   ' +
        values[window.selectedControl]["name"] +
        '" onchange="changeName(' +
        "'" +
        window.selectedControl +
        "'" +
        ',this.value)"/><div style="display: flex; justify-content: end; padding-right: 13px;"><div><button class="submit set-value-btn" style="border-radius: 20px">Set Name</button></div></div>'
    )
      .appendTo("body")
      .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });

  $("body").on("contextmenu", "#diagram .gatepulse", function (event) {
    event.preventDefault();
    $("div.custom-menu").remove();
    window.selectedControl = $(this).attr("id");

    if (correct_connections_flag) {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="gateSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px;width: 160px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "'" +
          ',this.value)"/></div><div   class="value-element" style="display: flex; align-items: center; "><label for="value-sfire-' +
          +window.selectedControl +
          '">Firing angle start:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["sfire"] +
          ' &deg;" min="1" max="180"  id="value-sfire-' +
          window.selectedControl +
          '" /> </div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-efire-' +
          +window.selectedControl +
          '">Firing angle end:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["efire"] +
          ' &deg;" min="1" max="180" style="position: relative;left: 5px;"   id="value-efire-' +
          window.selectedControl +
          '" /> </div> <div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Value</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    } else {
      $(
        '<div class="custom-menu"><div class="name-element"><div class="name-element"><div style="display: flex; justify-content: end; position: relative;top: -4px;height: 28px; margin-bottom: 2px ;"><button class="submit fa fa-times cross-btn" id="submit-' +
          window.selectedControl +
          '"></button></div></div></div><form action="#" onsubmit="gateSubmited(' +
          "'" +
          window.selectedControl +
          "'" +
          ')"><div><label for="name-' +
          window.selectedControl +
          '">Name:</label><input type="text" class="set-input-name" id="name-' +
          window.selectedControl +
          '" style="border-radius: 20px;width: 160px; padding:2px;"  placeholder="  ' +
          values[window.selectedControl]["name"] +
          '" onchange="changeName(' +
          "'" +
          window.selectedControl +
          "" +
          ',this.value)"/><div    class="value-element" style="display: flex; align-items: center; "><label for="value-sfire-' +
          +window.selectedControl +
          '">Firing angle start:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["sfire"] +
          ' &deg;" min="0" max="180" disabled   id="value-sfire-' +
          window.selectedControl +
          '" /> </div><div    class="value-element" style="display: flex; align-items: center; "><label for="value-efire-' +
          +window.selectedControl +
          '">Firing angle end:</label><input type="number" class="set-input" placeholder="  ' +
          values[window.selectedControl]["efire"] +
          ' &deg;" min="0" max="180" disabled  style="position: relative;left: 5px;"  id="value-efire-' +
          window.selectedControl +
          '" /> </div> <div style="display: flex; justify-content: end; padding-right: 13px"><button type="submit"  class="set-value-btn" style="border-radius: 20px">Set Name</button></div></form></div>'
      )
        .appendTo("body")
        .css({ top: event.pageY + "px", left: event.pageX + 10 + "px" });
    }
    $(".submit").bind("click", function (event) {
      $("div.custom-menu").remove();
    });
  });
});

function vlotEnter(no, value) {
  values[no]["volt"] = value;
  var ele = no + "-volt";
  $("#" + ele).text(value + " volt");
  if (correct_connections_flag) {
    plotData();
  }
}
function freqEnter(no, value) {
  values[no]["freq"] = value;
  var ele = no + "-freq";
  $("#" + ele).text(value + " Hz");
  if (correct_connections_flag) {
    plotData();
  }
}

function changeName(name, value) {
  values[name]["name"] = value.toUpperCase();
  var ele = name + "-name";
  $("#" + ele).text(values[name]["name"]);
  if (correct_connections_flag) {
    plotData();
  }
}

function changeValue(no, value) {
  values[no]["value"] = value;
  var ele = no + "-value";
  $("#" + ele).text(value + values[no]["unit"]);
}

function dcSubmited(name) {
  var a = document.getElementById("value-" + name).value;
  if (a != "") {
    new_reading = true;
    values[name]["value"] = a;
    var ele = name + "-value";
    new_reading = true;
    $("#" + ele).text(values[name]["value"] + values[name]["unit"]);
  }
  document.getElementById("submit-" + name).click();

  if (correct_connections_flag) {
    plotData();
  }
  return false;
}

function gateSubmited(name) {
  var sfire = parseInt(document.getElementById("value-sfire-" + name).value);
  var efire = parseInt(document.getElementById("value-efire-" + name).value);
  var ele;
  if (!Number.isNaN(sfire) && !Number.isNaN(efire)) {
    if (sfire >= efire) {
      openPopup(
        "new-img/404-warning.png",
        "Firing angle should be in increasing order",
        "23px"
      );
    } else {
      values[name]["sfire"] = sfire;
      ele = name + "-sfire";
      new_reading = true;
      $("#" + ele).text(values[name]["sfire"] + values[name]["unit"] + "  ");
      values[name]["efire"] = efire;
      ele = name + "-efire";
      new_reading = true;
      $("#" + ele).text(values[name]["efire"] + values[name]["unit"]);
    }
  } else {
    if (!Number.isNaN(sfire)) {
      if (values[name]["efire"] == 0) {
        openPopup("new-img/404-warning.png", "Ending angle is Empty", "28px");
      } else if (sfire >= values[name]["efire"]) {
        openPopup(
          "new-img/404-warning.png",
          "Firing angle should be in increasing order",
          "23px"
        );
      } else {
        values[name]["sfire"] = sfire;
        ele = name + "-sfire";
        new_reading = true;
        $("#" + ele).text(values[name]["sfire"] + values[name]["unit"] + "  ");
      }
    }
    if (!Number.isNaN(efire)) {
      if (efire <= values[name]["sfire"]) {
        openPopup(
          "new-img/404-warning.png",
          "Firing angle should be in increasing order",
          "23px"
        );
      } else if (values[name]["sfire"] == 0) {
        openPopup("new-img/404-warning.png", "Starting angle is Empty", "28px");
      } else {
        values[name]["efire"] = efire;
        ele = name + "-efire";
        new_reading = true;
        $("#" + ele).text(values[name]["efire"] + values[name]["unit"]);
      }
    }
  }
  document.getElementById("submit-" + name).click();

  if (correct_connections_flag) {
    plotData();
  }
  return false;
}

function acSubmited(name) {
  var volt = document.getElementById("value-volt-" + name).value;
  var ele;
  if (volt != "") {
    values[name]["volt"] = volt;
    ele = name + "-volt";
    $("#" + ele).text(values[name]["volt"] + values[name]["unit"]);
    new_reading = true;
  }
  var freq = document.getElementById("value-freq-" + name).value;
  if (freq != "") {
    values[name]["freq"] = freq;
    ele = name + "-freq";
    new_reading = true;
    $("#" + ele).text(values[name]["freq"] + values[name]["unitfreq"]);
  }
  document.getElementById("submit-" + name).click();
  if (correct_connections_flag) {
    plotData();
  }
}

function dcValue(no, value) {
  values[no]["value"] = value;
  var ele = no + "-value";
  $("#" + ele).text(value + values[no]["unit"]);
  new_reading = true;
  if (correct_connections_flag) {
    plotData();
  }
}
function instchange() {
  document.getElementById("inst").classList.toggle("inst-display");
}

$(document).ready(function () {
  $("#data").on("click", function () {
    $("#readings").show();
  });
});
document.getElementById("check1").addEventListener("click", () => {
  if (wrong_connection.length == 0) {
    if (user_connection.length < 14) {
      openPopup(
        "new-img/404-warning.png",
        "Please make all the connections",
        "28px"
      );
    } else {
      openPopup(
        "new-img/404-tick.png",
        "Well Done! All Connections are Connected",
        "23px"
      );
      correct_connections_flag = true;
    }
  } else {
    openPopup(
      "new-img/404-warning.png",
      "Wrong connection present in the circuit",
      "23px"
    );
  }
});
var count = 1;
var new_reading = true;
function showreadings() {
  if (correct_connections_flag) {
    if (
      values["AC1"]["volt"] != 0 &&
      values["AC1"]["freq"] != 0 &&
      values["R1"]["value"] != 0 &&
      values["GTP1"]["efire"] != 0 &&
      values["I1"]["value"] != 0
    ) {
      if (new_reading) {
        if (count < 11) {
          document.getElementById("Taken_reading").style.display = "block";
          var a = document.getElementById("tab");
          var b = a.innerHTML;
          var str = `<tr><td>${count}</td><td>${values["vrms"]}</td><td>${values["irms"]}</td><td>${values["vavg"]}</td><td>${values["iavg"]}</td></tr>`;

          a.innerHTML = b + str;
          count = count + 1;
          new_reading = false;
        } else {
          openPopup(
            "new-img/404-warning.png",
            "You can only add 10 readings in the table",
            "23px"
          );
        }
      }
    }
  }
}
